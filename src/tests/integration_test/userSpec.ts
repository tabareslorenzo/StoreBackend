import {User, UserStore} from "../../models/users";
import bcrypt from 'bcrypt'
const saltRounds = process.env.SALT_ROUNDS
const pepper = process.env.BCRYPT_PASSWORD

const store = new UserStore();

describe("User Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    }); 
    it('should have a create method', () => {
    expect(store.create).toBeDefined();
    });

    it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
    });

    it('create method should add a user', async () => {
      
        const result = await store.create({
          username: 'whatever',
          hashed_password: "12345"
        });
        expect(bcrypt.compareSync("12345"+pepper, result.hashed_password as string)).toBeTrue()
        
        expect(result.username).toEqual('whatever');
      });
    
      it('index method should return a list of users', async () => {
        const result = await store.index();

        expect(bcrypt.compareSync("12345"+pepper, result[0].hashed_password as string)).toBeTrue()
        expect(bcrypt.compareSync("12345"+pepper, result[1].hashed_password as string)).toBeTrue()
        expect(bcrypt.compareSync("12345"+pepper, result[2].hashed_password as string)).toBeTrue()
        expect(result[0].username).toEqual('whatever');
        expect(result[1].username).toEqual('whatever');
        expect(result[2].username).toEqual('whatever');
        
      });
    
      it('show method should return the correct user', async () => {
        const result = await store.show("2");
        expect(bcrypt.compareSync("12345"+pepper, result.hashed_password as string)).toBeTrue()
        expect(result.username).toEqual('whatever');
      });
    
      it('delete method should remove the user', async () => {
        const _ = await store.delete("2");
        const result = await store.index()
        expect(bcrypt.compareSync("12345"+pepper, result[0].hashed_password as string)).toBeTrue()
        expect(bcrypt.compareSync("12345"+pepper, result[1].hashed_password as string)).toBeTrue()
        expect(result[0].username).toEqual('whatever');
        expect(result[1].username).toEqual('whatever');

      });
});