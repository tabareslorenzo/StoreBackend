import {User, UserStore} from "../../models/users";

const store = new UserStore();

describe("User Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(store.index).toBeDefined();
    }); 
    it('should have a create method', () => {
    expect(store.index).toBeDefined();
    });

    it('should have a update method', () => {
    expect(store.index).toBeDefined();
    });

    it('should have a delete method', () => {
    expect(store.index).toBeDefined();
    });

    it('create method should add a user', async () => {
        const result = await store.create({
          username: 'whatever',
          hashed_password: "12345"
        });
        expect(result).toEqual({
          id: 3,
          username: 'whatever',
          hashed_password: "12345"
        });
      });
    
      it('index method should return a list of users', async () => {
        const result = await store.index();
        expect(result).toEqual([
        {
            id: 1,
            username: 'whatever',
            hashed_password: "12345"
        },
        {
            id: 2,
            username: 'whatever',
            hashed_password: "12345"
        },
        {
          id: 3,
          username: 'whatever',
          hashed_password: "12345"
        }
      ]);
        
      });
    
      it('show method should return the correct user', async () => {
        const result = await store.show("2");
        expect(result).toEqual({
          id: 2,
          username: 'whatever',
          hashed_password: "12345"
        });
      });
    
      it('delete method should remove the user', async () => {
        const _ = await store.delete("2");
        const result = await store.index()
    
        expect(result).toEqual([{
            id: 1,
            username: 'whatever',
            hashed_password: "12345"
        },
        {
          id: 3,
          username: 'whatever',
          hashed_password: "12345"
        }
      ]);
      });
});