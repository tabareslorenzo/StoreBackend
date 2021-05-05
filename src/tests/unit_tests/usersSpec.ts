import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe('Users Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
        done();
    })

    it('gets by id the api endpoint', async (done) => {
        const response = await request.get('/users/1');
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
        const response = await request.delete('/users/1');
        expect(response.status).toBe(200);
        done();
    })
});