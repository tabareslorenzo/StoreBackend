import express, { Request, Response } from 'express'
import { Order_Product, Order_ProductStore } from '../models/order-product'
import {authToken} from '../middleware/auth'

const store = new Order_ProductStore()
const Router = express.Router()

Router.get('/', authToken, async (_req: Request, res: Response) => {
    const order_products = await store.index()
    res.json(order_products)
  })
Router.get('/:id', authToken, async (req: Request, res: Response) => {
    const order_product = await store.show(req.body.id)
    res.json(order_product)
 })
 Router.post('/', authToken, async (req: Request, res: Response) => {
    try {

        const order_product: Order_Product = {
            quantity: req.body.quantity,
            order_id: req.body.order_id,
            product_id: req.body.product_id
        }

        const newOrder_product = await store.create(order_product)
        res.json(newOrder_product)
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