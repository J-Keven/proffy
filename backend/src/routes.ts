import { Router } from 'express'
import dbConnection from './database/connection'
import convertHoursInMinutes from './utils/convertHoursInMinutes'


interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

const routes = Router();

routes.get('/',async (req, res) => {
  const users = await dbConnection("users").select('*')
  const classes = await dbConnection("classes").select('*')
  const schedule = await dbConnection("class_schedule").select('*')

  return res.json({
    users,
    classes,
    schedule
  })
})

routes.post('/classes', async (req, res) => {

  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = req.body;

  const trx = await dbConnection.transaction()

  try {
    const [ user_id ] = await trx("users")
      .insert({
        name,
        avatar,
        whatsapp,
        bio
    })

    const [ classes_id ]  = await trx("classes")
      .insert({
        subject,
        cost,
        user_id
    })

    const classSchedule = schedule.map((item: ScheduleItem) => {
      return {
        classes_id,
        week_day: item.week_day,
        from: convertHoursInMinutes(item.from),
        to: convertHoursInMinutes(item.to),
      }
    })

    await trx("class_schedule").insert(classSchedule)

    await trx.commit()

    return res.status(201).json(req.body)

  } catch (error) {

    await trx.rollback()
    return res.status(400).json({
      err: "unexpected error while creating new classes."
    })

  }
})

export default routes;
