import request from 'supertest';
import { APP_URL, TESTER_EMAIL, TESTER_PASSWORD, MAIL_HOST, MAIL_PORT } from '../utils/constants';
// import e from 'express';

describe('Auth user (e2e)', () => {
  const app = APP_URL;
  const mail = `http://${MAIL_HOST}:${MAIL_PORT}`;
  const newUserEmail = `User.${Date.now()}@example.com`;
  const newUserPassword = `secret`;

  it('Login: /api/v1/auth/email/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.refreshToken).toBeDefined();
        expect(body.tokenExpires).toBeDefined();
        expect(body.user.email).toBeDefined();
        expect(body.user.hash).not.toBeDefined();
        expect(body.user.password).not.toBeDefined();
        expect(body.user.previousPassword).not.toBeDefined();
      });
  });

  it('Login via admin endpoint: /api/v1/auth/admin/email/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/admin/email/login')
      .send({ email: TESTER_EMAIL, password: TESTER_PASSWORD })
      .expect(422);
  });

  it('Login via admin endpoint with extra spaced: /api/v1/auth/admin/email/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/admin/email/login')
      .send({ email: TESTER_EMAIL + '  ', password: TESTER_PASSWORD })
      .expect(422);
  });

  it('Do not allow register user with exists email: /api/v1/auth/email/register (POST)', () => {
    return request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: TESTER_EMAIL,
        password: TESTER_PASSWORD,
      })
      .expect(422)
      .expect(({ body }) => {
        expect(body.errors.email).toBeDefined();
      });
  });

  it('Register new user: /api/v1/auth/email/register (POST)', async () => {
    return request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: newUserEmail,
        password: newUserPassword,
      })
      .expect(204);
  });

  it('Login unconfirmed user: /api/v1/auth/email/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
      });
  });

  it('Confirm email: /api/v1/auth/email/confirm (POST)', async () => {
    const hash = await request(mail)
      .get('/email')
      .then(
        ({ body }) =>
          body
            .find(
              letter =>
                letter.to[0].address.toLowerCase() === newUserEmail.toLowerCase() &&
                /.*confirm\-email\?hash\=(\w+).*/g.test(letter.text)
            )
            ?.text.replace(/.*confirm\-email\?hash\=(\w+).*/g, '$1')
      );

    return request(app)
      .post('/api/v1/auth/email/confirm')
      .send({
        hash,
      })
      .expect(204);
  });

  it('Can not confirm email with same link twice: /api/v1/auth/email/confirm (POST)', async () => {
    const hash = await request(mail)
      .get('/email')
      .then(
        ({ body }) =>
          body
            .find(
              letter =>
                letter.to[0].address.toLowerCase() === newUserEmail.toLowerCase() &&
                /.*confirm\-email\?hash\=(\w+).*/g.test(letter.text)
            )
            ?.text.replace(/.*confirm\-email\?hash\=(\w+).*/g, '$1')
      );

    return request(app)
      .post('/api/v1/auth/email/confirm')
      .send({
        hash,
      })
      .expect(404);
  });

  it('Login confirmed user: /api/v1/auth/email/login (POST)', () => {
    return request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.user.email).toBeDefined();
      });
  });

  it('Confirmed user retrieve profile: /api/v1/auth/me (GET)', async () => {
    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .get('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send()
      .expect(({ body }) => {
        expect(body.provider).toBeDefined();
        expect(body.email).toBeDefined();
        expect(body.hash).not.toBeDefined();
        expect(body.password).not.toBeDefined();
        expect(body.previousPassword).not.toBeDefined();
      });
  });

  it('Refresh token: /api/v1/auth/refresh (GET)', async () => {
    const newUserRefreshToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .then(({ body }) => body.refreshToken);

    await request(app)
      .post('/api/v1/auth/refresh')
      .auth(newUserRefreshToken, {
        type: 'bearer',
      })
      .send()
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
        expect(body.refreshToken).toBeDefined();
        expect(body.tokenExpires).toBeDefined();
      });
  });

  it('New user update profile: /api/v1/auth/me (PATCH)', async () => {
    // const newUserNewName = Date.now();
    const newUserNewPassword = 'new-secret';
    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        password: newUserNewPassword,
      })
      .expect(200);

    await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserNewPassword })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        password: newUserPassword,
      })
      .expect(200);

    await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .expect(200)
      .expect(({ body }) => {
        expect(body.token).toBeDefined();
      });
  });

  it('New user update universityData field: /api/v1/auth/me (PATCH)', async () => {
    const newUniversityData = [
      {
        university: 'UIC',
        degree: 'BA',
        major: 'CS',
        admissionDate: '2019-10-05 04:26:58.635885',
      },
    ];

    // admissionDate can't be same as graduationDate
    const badUniversityData = [
      {
        university: 'UIC',
        degree: 'BA',
        major: 'CS',
        admissionDate: '2019-10-05',
        graduationDate: '2019-10-05',
      },
    ];

    // empty fields
    const emptyUniversityData = [
      {
        university: '',
        degree: '',
        major: '',
        admissionDate: '2019-10-05',
        graduationDate: '2023-10-05',
      },
    ];

    // wrong type of date
    const wrongDateTypeUniversityData = [
      {
        university: '',
        degree: '',
        major: '',
        admissionDate: '',
        graduationDate: '',
      },
    ];

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universityData: newUniversityData,
      })
      .expect(200);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universityData: [{}],
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universityData: [],
      })
      .expect(200);

    // checks entity restrictions
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universityData: badUniversityData,
      })
      .expect(500);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universityData: emptyUniversityData,
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universityData: wrongDateTypeUniversityData,
      })
      .expect(422);
  });

  it('New user delete profile: /api/v1/auth/me (DELETE)', async () => {
    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app).delete('/api/v1/auth/me').auth(newUserApiToken, {
      type: 'bearer',
    });

    return request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: newUserEmail, password: newUserPassword })
      .expect(422);
  });
});
