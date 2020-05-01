const request = require('supertest');
const server = require('./server.js');

describe('server',()=> {
    it('should set the testing environment', ()=>{
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('GET /', () => {
        //result code 
        it('should return 200', ()=>{
            return request(server).get('/')
                .then(res =>{
                    expect(res.status).toBe(200);
                });
        });

        it('should return 200 with await', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return JSON type', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return {api:"up"}', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({api:"up"});
        });

    });

    describe('GET /cookies', () => {
        it('should return 200', ()=>{
            return request(server).get('/cookies')
                .then(res =>{
                    expect(res.status).toBe(200);
                });
        });

        it('should return 200 with await', async () => {
            const res = await request(server).get('/cookies');
            expect(res.status).toBe(200);
        });

        it('should return JSON type', async () => {
            const res = await request(server).get('/cookies');
            expect(res.type).toBe('application/json');
        });

    });

    describe('DELETE /cookies/:id',()=>{
        it('should return 404 once cookie is deleted', ()=>{
            return request(server).delete('/cookies/2')
                .then(res =>{
                    expect(res.status).toBe(404);
                });
        });
    })
});

// status code
// return code, body, headers
// format, format headers
