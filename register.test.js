const request = require('supertest');
const app = require('./server'); // 

describe('POST /users/register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/users/register')
      .send({
        name: 'TestUser',
        email: 'testuser@example.com',
        password: 'testpassword'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
