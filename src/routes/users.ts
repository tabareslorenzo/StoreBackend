import express, { Request, Response } from 'express'
import { User, UserStore } from '../models/users'

const store = new UserStore()
const Router = express.Router()

Router.get('/', async (_req: Request, res: Response) => {
    const users = await store.index()
    res.json(users)
  })
Router.get('/:id',  async (req: Request, res: Response) => {
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
        res.json(user)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
})
Router.delete('/:id', async (req: Request, res: Response) => {
    const deleted = await store.delete(req.body.id)
    res.json(deleted)
})


export default Router