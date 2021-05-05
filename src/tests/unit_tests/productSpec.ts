import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe('Product Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/product');
        expect(response.status).toBe(200);
        done();
    })

    it('gets by id the api endpoint', async (done) => {
        const response = await request.get('/product/1');
        expect(response.status).toBe(200);
        done();
    })

    it('post the api endpoint', async (done) => {
        const response = await request.post('/product/')
        .send({
            name: 'whatever',
            price: 12345,
            description: "String"
        });
        expect(response.status).toBe(200);
        done();
    })
    it('deletes by id the api endpoint', async (done) => {
        const response = await request.delete('/product/1');
        expect(response.status).toBe(200);
        done();
    })
});