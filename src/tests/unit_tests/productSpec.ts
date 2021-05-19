import supertest from 'supertest';
import app from '../../server';
const token: string = process.env.TOKEN_TEST as string;

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
        .set('Authorization', 'Bearer ' + token)
        .send({
            name: 'whatever',
            price: 12345,
            description: "String"
        });
        expect(response.status).toBe(200);
        done();
    })
    it('deletes by id the api endpoint', async (done) => {
        const response = await request.delete('/product/1')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })
});