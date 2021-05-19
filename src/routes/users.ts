import express, { Request, Response } from 'express'
import { User, UserStore } from '../models/users'
import jwt from 'jsonwebtoken'
import {authToken} from '../middleware/auth'

const store = new UserStore()
const Router = express.Router()

Router.get('/', authToken, async (_req: Request, res: Response) => {
    const users = await store.index()
    res.json(users)
  })
Router.get('/:id', authToken, async (req: Request, res: Response) => {
    const user = await store.show(req.body.id)
    res.json(user)
 })
 Router.post('/', async (req: Request, res: Response) => {
    try {
        
        const user: User = {
            username: req.body.username,
            hashed_password: req.body.hashed_password,
        }

        const newUser = await store.create(user)
        var token = jwt.sign({ user: newUser }, process.env.TOKEN_SECRET!);
        res.json(token)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
})
Router.delete('/:id', authToken, async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
})


export default Router