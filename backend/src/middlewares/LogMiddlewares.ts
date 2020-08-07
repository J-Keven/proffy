import {Request, Response, NextFunction} from 'express'

export default function LogMiddleware(req:Request, res:Response, next:NextFunction){
  console.time()

  console.log(`Route: ${req.url}  IP:${req.ip}`)
  console.timeEnd()

  return next();
}
