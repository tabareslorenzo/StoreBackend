// @ts-ignore
import Client from '../database'

export default class DashboardQueries {
  // Get all users that have made orders
  async usersWithOrders(): Promise<{firstName: string, lastName: string}[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql = 'Select users.username, product.name, product.price, product.description, orders.status from order_products as op inner join orders on op.order_id = orders.id inner join users on orders.user_id = users.id  inner join product on op.product_id = product.id'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`)
    } 
  }

  async productsInOrders(): Promise<{firstName: string, lastName: string}[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT first_name, last_name FROM users INNER JOIN orders ON users.id = orders.user_id'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`unable get users with orders: ${err}`)
    } 
  }

}