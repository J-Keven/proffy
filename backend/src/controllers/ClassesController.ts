import {Request, Response} from "express"
import db from '../database/connection'
import convertHoursInMinutes from "../utils/convertHoursInMinutes"
import * as yup from 'yup'

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}


class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const Schema = yup.object().shape({
      subject: yup.string(),
      week_day: yup.string(),
      time: yup.string()
    });

    if(!(await Schema.isValid(filters))){
      return res.status(400).json({
        err: "Type query params is not acept"
      });
    };

    if(!filters.subject || !filters.week_day || !filters.time){
      return res.status(400).json({
        err: "Missing filter to search classes"
      });
    }

    const time = convertHoursInMinutes(filters.time as string)
    const week_day = filters.week_day as string;
    const subject = filters.subject as string;

    const classesFilter = await db("classes")
      .whereExists(function (){
        this.select("*")
          .from("class_schedule")
          .whereRaw('`class_schedule`.`classes_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??',[Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [time])
          .whereRaw('`class_schedule`.`to` > ??', [time]);
      })
      .where('classes.subject', '=', subject)
      .join('users', "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return res.json(classesFilter)

  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;

    const trx = await db.transaction()

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
  }
}


export default new ClassesController()
