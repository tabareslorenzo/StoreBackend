import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe('Order_Product Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/order_product');
        expect(response.status).toBe(200);
        done();
    })

    it('gets by id the api endpoint', async (done) => {
        const response = await request.get('/order_product/1');
        expect(response.status).toBe(200);
        done();
    })

    it('post the api endpoint', async (done) => {
        const res = await request.post('/orders/')
        .send({
            status: 'whatever',
            user_id: '1'
        });
        const res1 = await request.post('/product/')
        .send({
            name: 'whatever',
            price: 12345,
            description: "String"
        });
        const response = await request.post('/order_product/')
        .send({
            quantity: 2,
            order_id: res.body.id,
            product_id: res1.body.id
        });
        expect(response.status).toBe(200);
        done();
    })
    it('deletes by id the api endpoint', async (done) => {
        const response = await request.delete('/order_product/1');
        expect(response.status).toBe(200);
        done();
    })
});