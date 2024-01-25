import request from 'supertest';
import { APP_URL, TESTER_EMAIL, TESTER_PASSWORD } from '../utils/constants';

describe('Friendship (e2e)', () => {
  const app = APP_URL;
  const receiverEmail = 'test@example.com';

  it('Send friendship request to existing user: /api/v1/friendship/:receiverId (POST)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .post('/api/v1/friendship/3')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .expect(201);
  });

  it('Send friendship request to existing user that you already sent request: /api/v1/friendship/:receiverId (POST)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .post('/api/v1/friendship/3')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .expect(409);
  });

  it('Create friendship with yourself: /api/v1/friendship/:receiverId (POST)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .post('/api/v1/friendship/2')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .expect(400);
  });

  it('Accept friendship request: /api/v1/friendship/:creatorId (UPDATE)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: receiverEmail, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/friendship/2')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .send({
        status: 'accepted',
      })
      .expect(200);
  });
  it('Try to accept not your friendship request: /api/v1/friendship/:creatorId (UPDATE)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/friendship/3')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .send({
        status: 'accepted',
      })
      .expect(404);
  });

  it('Delete friendship : /api/v1/friendship/:friendId (DELETE)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .delete('/api/v1/friendship/3')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .expect(204);
  });

  it('Cancel friendship request: /api/v1/friendship/:friendId (DELETE)', async () => {
    const creatorApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app).post('/api/v1/friendship/3').auth(creatorApiToken, {
      type: 'bearer',
    });

    await request(app)
      .delete('/api/v1/friendship/3')
      .auth(creatorApiToken, {
        type: 'bearer',
      })
      .expect(204);
  });

  it('Send friendship request to existing user, but you banned for some time: /api/v1/friendship/:receiverId (POST)', async () => {
    const userApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => body.token);

    await request(app)
      .post('/api/v1/friendship/3')
      .auth(userApiToken, {
        type: 'bearer',
      })
      .expect(409);
  });

  it('Get friends list: /api/v1/friendship/:userId (GET)', async () => {
    await request(app).get('/api/v1/friendship/2').expect(200);
  });
});
