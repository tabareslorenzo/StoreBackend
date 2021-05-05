import express, { Request, Response } from 'express'
import DashboardQueries from '../services/DashboardService'

const store = new DashboardQueries()
const Router = express.Router()

Router.get('/', async (_req: Request, res: Response) => {
    const users_Orders = await store.usersWithOrders()
    res.json(users_Orders)
  })

export default Router