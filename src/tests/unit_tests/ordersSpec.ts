import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe('Orders Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/orders');
        expect(response.status).toBe(200);
        done();
    })

    it('gets by id the api endpoint', async (done) => {
        const response = await request.get('/orders/1');
        expect(response.status).toBe(200);
        done();
    })

    it('post the api endpoint', async (done) => {
        const response = await request.post('/orders/')
        .send({
            status: 'whatever',
            user_id: '1'
        });
        expect(response.status).toBe(200);
        done();
    })
    it('deletes by id the api endpoint', async (done) => {
        const response = await request.delete('/orders/1');
        expect(response.status).toBe(200);
        done();
    })
});