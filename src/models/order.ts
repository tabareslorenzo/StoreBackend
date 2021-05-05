// @ts-ignore
import Client from '../database'

export type Order = {
     id?: Number;
     status: String;
     user_id?: String;
}

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM orders'
  
      const result = await conn.query(sql)
  
      conn.release()
  
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Order> {
    try {
    const sql = 'SELECT * FROM orders WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find orders ${id}. Error: ${err}`)
    }
  }

  async create(o: Order): Promise<Order> {
      try {
    const sql = 'Insert into orders(status, user_id) VALUES($1, $2) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [o.status, parseInt(o.user_id as string)])

    const Order = result.rows[0]

    conn.release()

    return Order
      } catch (err) {
          throw new Error(`Could not add new users ${o.status}. Error: ${err}`)
      }
  }

  async delete(id: string): Promise<Order> {
      try {
    const sql = 'DELETE FROM orders WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const Order = result.rows[0]

    conn.release()

    return Order
      } catch (err) {
          throw new Error(`Could not delete users ${id}. Error: ${err}`)
      }
  }
}