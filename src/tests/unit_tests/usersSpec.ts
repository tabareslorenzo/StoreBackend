import supertest from 'supertest';
import app from '../../server';

const token: string = process.env.TOKEN_TEST as string;

const request = supertest(app);
describe('Users Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/users')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })

    it('gets by id the api endpoint', async (done) => {
        const response = await request.get('/users/1')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })

    it('post the api endpoint', async (done) => {
        const response = await request.post('/users/')
        .send({
            username: 'whatever',
            hashed_password: "12345"
          });
        expect(response.status).toBe(200);
        done();
    })
    it('deletes by id the api endpoint', async (done) => {
        const response = await request.delete('/users/1')
        .set('Authorization', 'Bearer ' + token);
        expect(response.status).toBe(200);
        done();
    })
});