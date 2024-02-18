import request from 'supertest';
import { APP_URL, TESTER_EMAIL, TESTER_PASSWORD } from '../utils/constants';
import { faker } from '@faker-js/faker';

describe('Friendship (e2e)', () => {
  const app = APP_URL;
  let receiver;
  let receiverToken;

  let sender;
  let senderToken;

  beforeAll(async () => {
    await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .then(({ body }) => {
        senderToken = body.token;
        sender = body.user;
      });

    const receiverEmail = 'receiver' + faker.internet.email();

    await request(app).post('/api/v1/auth/email/register').send({
      email: receiverEmail,
      password: TESTER_PASSWORD,
    });

    await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: receiverEmail, password: TESTER_PASSWORD })
      .then(({ body }) => {
        receiver = body.user;
        receiverToken = body.token;
      });
  });

  it('Send friendship request to existing user: /api/v1/friendship/:receiverId (POST)', async () => {
    await request(app)
      .post(`/api/v1/friendship/${receiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(201);
  });

  it('Send friendship request to existing user that you already sent request: /api/v1/friendship/:receiverId (POST)', async () => {
    await request(app)
      .post(`/api/v1/friendship/${receiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(409);
  });

  it('Create friendship with yourself: /api/v1/friendship/:receiverId (POST)', async () => {
    await request(app)
      .post(`/api/v1/friendship/${sender.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(400);
  });
  //
  it('Accept friendship request: /api/v1/friendship/:creatorId (UPDATE)', async () => {
    await request(app)
      .patch(`/api/v1/friendship/${sender.id}`)
      .auth(receiverToken, {
        type: 'bearer',
      })
      .send({
        status: 'accepted',
      })
      .expect(200);
  });
  it('Try to accept not your friendship request: /api/v1/friendship/:creatorId (UPDATE)', async () => {
    await request(app)
      .patch('/api/v1/friendship/3')
      .auth(senderToken, {
        type: 'bearer',
      })
      .send({
        status: 'accepted',
      })
      .expect(404);
  });
  //
  it('Delete friendship : /api/v1/friendship/:friendId (DELETE)', async () => {
    await request(app)
      .delete(`/api/v1/friendship/${receiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(204);
  });
  //
  it('Cancel friendship request: /api/v1/friendship/:friendId (DELETE)', async () => {
    let newReceiverEmail = 'receiver' + faker.internet.email();
    let newReceiver;

    await request(app).post('/api/v1/auth/email/register').send({
      email: newReceiverEmail,
      password: TESTER_PASSWORD,
    });

    await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newReceiverEmail, password: TESTER_PASSWORD })
      .then(({ body }) => {
        newReceiver = body.user;
      });

    await request(app)
      .post(`/api/v1/friendship/${newReceiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(201);

    await request(app)
      .delete(`/api/v1/friendship/${newReceiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(204);
  });

  it('Reject friendship request: /api/v1/friendship/:creatorId (UPDATE)', async () => {
    await request(app)
      .post(`/api/v1/friendship/${receiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(201);

    await request(app)
      .patch(`/api/v1/friendship/${sender.id}`)
      .auth(receiverToken, {
        type: 'bearer',
      })
      .send({
        status: 'rejected',
      })
      .expect(200);
  });
  //
  it('Send friendship request to existing user, but you banned for some time: /api/v1/friendship/:receiverId (POST)', async () => {
    await request(app)
      .post(`/api/v1/friendship/${receiver.id}`)
      .auth(senderToken, {
        type: 'bearer',
      })
      .expect(409);
  });
  //
  it('Get friends list: /api/v1/friendship/:userId (GET)', async () => {
    await request(app).get(`/api/v1/friendship/${sender.id}`).expect(200);
  });
});
