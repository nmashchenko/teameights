import request from 'supertest';
import { APP_URL } from '../utils/constants';

describe('Get users (e2e)', () => {
  const app = APP_URL;
  const newUserEmail = `User.${Date.now()}@example.com`;
  const newUserPassword = `secret`;

  it('Register new user: /api/v1/auth/email/register (POST)', async () => {
    return request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: newUserEmail,
        password: newUserPassword,
      })
      .expect(204);
  });

  it('Get list of users: /api/v1/users (GET)', () => {
    return request(app)
      .get(`/api/v1/users`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        expect(body.data.length).toBeGreaterThan(0);
      });
  });
});
