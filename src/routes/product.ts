import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/product'

const store = new ProductStore()
const Router = express.Router()

Router.get('/', async (_req: Request, res: Response) => {
    const products = await store.index()
    res.json(products)
  })
Router.get('/:id',  async (req: Request, res: Response) => {
    const product = await store.show(req.body.id)
    res.json(product)
 })
 Router.post('/', async (req: Request, res: Response) => {
    try {
        const product: Product = {
            name : req.body.name,
            price: req.body.price,
            description : req.body.description
        }

        const newProduct = await store.create(product)
        res.json(newProduct)
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