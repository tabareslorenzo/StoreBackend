import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
describe('Dashboard Test endpoint responses', () => {
    it('gets all the api endpoint', async (done) => {
        const response = await request.get('/users_orders');
        expect(response.status).toBe(200);
        done();
    })

    
});