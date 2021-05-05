// @ts-ignore
import Client from '../database'

export type Order_Product = {
     id?: Number;
     quantity: Number;
     order_id: string;
     product_id: string;
}
// quantity integer,
// order_id bigint REFERENCES orders(id),
// product_id bigint REFERENCES product(id)

export class Order_ProductStore {
  async index(): Promise<Order_Product[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM order_products'
  
      const result = await conn.query(sql)
  
      conn.release()
  
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get order_products. Error: ${err}`)
    }
  }

  async show(id: string): Promise<Order_Product> {
    try {
    const sql = 'SELECT * FROM order_products WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find order_products ${id}. Error: ${err}`)
    }
  }

  async create(op: Order_Product): Promise<Order_Product> {
      try {
    const sql = 'Insert into order_products(quantity,order_id,product_id) VALUES($1, $2, $3) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn
        .query(sql, [op.quantity, parseInt(op.order_id), parseInt(op.product_id)])

    const Order_Product = result.rows[0]

    conn.release()

    return Order_Product
      } catch (err) {
          throw new Error(`Could not add new order_products ${op.order_id}. Error: ${err}`)
      }
  }

  async delete(id: string): Promise<Order_Product> {
      try {
    const sql = 'DELETE FROM order_products WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const Order_product = result.rows[0]

    conn.release()

    return Order_product
      } catch (err) {
          throw new Error(`Could not delete order_products ${id}. Error: ${err}`)
      }
  }
}