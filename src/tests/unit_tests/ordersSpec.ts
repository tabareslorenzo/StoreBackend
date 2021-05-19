import supertest from 'supertest';
import app from '../../server';
const token: string = process.env.TOKEN_TEST as string;

const request = supertest(app);
describe('Orders Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/orders')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })

    it('gets by id the api endpoint', async (done) => {
        const response = await request.get('/orders/1')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })

    it('post the api endpoint', async (done) => {
        const response = await request.post('/orders/')
        .set('Authorization', 'Bearer ' + token)
        .send({
            status: 'whatever',
            user_id: '1'
        });
        expect(response.status).toBe(200);
        done();
    })
    it('deletes by id the api endpoint', async (done) => {
        const response = await request.delete('/orders/1')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })
});