const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    it('should return Hello World on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello World gral!');
    });

    it('should echo back the posted data on POST /echo', async () => {
        const data = { name: 'Test User' };
        const response = await request(app).post('/echo').send(data);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(data);
    });

    it('should return image details for /image1', async () => {
        const response = await request(app).get('/image1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ image: 'alepellereca/imagenfront:latest', description: 'Frontend' });
    });

    it('should return image details for /image2', async () => {
        const response = await request(app).get('/image2');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ image: 'alepellereca/imagenback:latest', description: 'Backend' });
    });
});

