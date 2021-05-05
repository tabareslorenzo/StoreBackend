import {Order, OrderStore} from "../../models/order";
import {User, UserStore} from "../../models/users";

const Ustore = new UserStore();

const store = new OrderStore();

describe("Order Model", () => {
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
    it('create method should add a order', async () => {
        const _ = await Ustore.create({
            username: 'whatever',
            hashed_password: "12345"
          });
        const result = await store.create({
            status: 'whatever',
            user_id: '1'
        });
        expect(result).toEqual({
            id: 2,
            status: 'whatever',
            user_id: '1'
        });
      });
    
      it('index method should return a list of orders', async () => {
        const result = await store.index();
        expect(result).toEqual([
        {
            id: 1,
            status: 'whatever',
            user_id: '1'
        },{
            id: 2,
            status: 'whatever',
            user_id: '1'
        }]);
      });
    
      it('show method should return the correct order', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id: 1,
            status: 'whatever',
            user_id: '1'
        });
      });
    
      it('delete method should remove the order', async () => {
        const _ = await store.delete("1");
        const result = await store.index()
        //const _1 = await Ustore.delete("1");
    
        expect(result).toEqual([{ id: 2, status: 'whatever', user_id: '1' }]);
      });
});