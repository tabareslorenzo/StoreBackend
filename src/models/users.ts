// @ts-ignore
import Client from '../database'
import bcrypt from 'bcrypt'

const saltRounds = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD

export type User = {
     id?: Number;
     username: String;
     hashed_password: String;
}

export class UserStore {
  async index(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM users'
  
      const result = await conn.query(sql)
  
      conn.release()
  
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`)
    }
  }

  async show(id: string): Promise<User> {
    try {
    const sql = 'SELECT * FROM users WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (err) {
        throw new Error(`Could not find users ${id}. Error: ${err}`)
    }
  }

  async create(u: User): Promise<User> {
      try {
    const sql = 'Insert into users(username,hashed_password) VALUES($1, $2) RETURNING *'
    // @ts-ignore
    const conn = await Client.connect()

    const hash = bcrypt.hashSync(
        u.hashed_password + pepper!, 
        parseInt(saltRounds!)
      );

    const result = await conn
        .query(sql, [u.username, hash])

    const User = result.rows[0]

    conn.release()

    return User
      } catch (err) {
          throw new Error(`Could not add new users ${u.username}. Error: ${err}`)
      }
  }

  async delete(id: string): Promise<User> {
      try {
    const sql = 'DELETE FROM users WHERE id=($1)'
    // @ts-ignore
    const conn = await Client.connect()

    const result = await conn.query(sql, [id])

    const User = result.rows[0]

    conn.release()

    return User
      } catch (err) {
          throw new Error(`Could not delete users ${id}. Error: ${err}`)
      }
  }

  async authenticate(username: string, password: string): Promise<User | null> {
      // @ts-ignore
    const conn = await Client.connect()
    const sql = 'SELECT hashed_password FROM users WHERE username=($1)'

    const result = await conn.query(sql, [username])

    console.log(password+pepper)

    if(result.rows.length) {

      const user = result.rows[0]

      console.log(user)
      
      if (bcrypt.compareSync(password+pepper, user.password_digest)) {
        return user
      }
    }

    return null
  }
}