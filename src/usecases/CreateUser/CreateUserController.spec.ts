import app from '@modules/shared/infra/http/app';
import request from 'supertest';

describe('Integration Test', () => {
  it('Create User', async () => {
    const response = await request(app)
      .post('/api/v1/users')
      .send({
        user: {
          name: 'rafael',
          email: 'rafael@gmail.com',
          password: '123',
          tyep: 'USER',
        },
      });
    console.log(response.body);
    expect(response.status).toBe(201);
  });
});
