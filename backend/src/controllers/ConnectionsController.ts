import {Request, Response} from 'express'
import db from '../database/connection'
import * as yup from 'yup'

class ConnectionController {
  async index(req: Request, res: Response) {
    const connectionTotal = await db('connections').count("* as total").first()
    return res.status(200).json(connectionTotal)
  }

  async create(req: Request, res: Response) {
    const data = req.body;

    const Schema = yup.object().shape({
      user_id: yup.number().required()
    })

    if(!(await Schema.isValid(data))){
      return res.status(400).json({
        err: "user_id is required and one number value"
      })
    }

    try{
      await db('connections').insert(data)

      return res.status(201).json(data)

    } catch(err){
      return res.json(404).json("error to insert values in database")
    }
  }
}

export default new ConnectionController();
