import app from '../../shared/infra/http/server';
import request from 'supertest';

describe('Integration Test', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  jest.setTimeout(6000000);
  it('Create User', async () => {
    const response = await request(app)
      .post('/api/v1/users')
      .send({
        user: {
          name: 'Rafael do Login',
          document: '10',
          email: '10@gmail.com',
          password: '123',
        },
      });

    expect(response.status).toBe(201);
  });
});
