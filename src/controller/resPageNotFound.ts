import {Request, Response} from 'express'

export const resPageNotFound = (req: Request, res: Response) =>
res.status(404).send("Page not found!")