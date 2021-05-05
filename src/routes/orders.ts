import express, { Request, Response } from 'express'
import { Order, OrderStore } from '../models/order'

const store = new OrderStore()
const Router = express.Router()

Router.get('/', async (_req: Request, res: Response) => {
    const orders = await store.index()
    res.json(orders)
  })
Router.get('/:id',  async (req: Request, res: Response) => {
    const order = await store.show(req.body.id)
    res.json(order)
 })
 Router.post('/', async (req: Request, res: Response) => {
    try {
        const order: Order = {
            status: req.body.status,
            user_id: req.body.user_id,
        }

        const newOrder = await store.create(order)
        res.json(newOrder)
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