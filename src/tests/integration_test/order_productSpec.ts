import {Order_Product, Order_ProductStore} from "../../models/order-product";
import {User, UserStore} from "../../models/users";
import {Product, ProductStore} from "../../models/product";
import {Order, OrderStore} from "../../models/order";

const Ustore = new UserStore();
const Pstore = new ProductStore();
const Ostore = new OrderStore();
const store = new Order_ProductStore();

describe("Order_Product Model", () => {
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

    it('create method should add a order_product', async () => {
        const res = await Pstore.create({
            name: 'whatever',
            price: 12345,
            description: "String"
        });
        const res1 = await Ustore.create({
            username: 'whatever',
            hashed_password: "12345"
        });
        const res2 = await Ostore.create({
            status: 'whatever',
            user_id: '1'
        });
        const result = await store.create({
            quantity: 2,
            order_id: '1',
            product_id: '1'
        });
        expect(result).toEqual({
            id: 1,
            quantity: 2,
            order_id: '1',
            product_id: '1'
        });
      });
    
      it('index method should return a list of users', async () => {
        const result = await store.index();
        expect(result).toEqual([
        {
            id: 1,
            quantity: 2,
            order_id: '1',
            product_id: '1'
        }]);
      });
    
      it('show method should return the correct user', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id: 1,
            quantity: 2,
            order_id: '1',
            product_id: '1'
        });
      });
    
      it('delete method should remove the user', async () => {
        const _ = await store.delete("1");
        const result = await store.index()
        Ustore.delete("3");
        Pstore.delete("3");
        expect(result).toEqual([]);
      });
});