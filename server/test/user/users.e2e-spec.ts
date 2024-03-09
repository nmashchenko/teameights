import request from 'supertest';
import { APP_URL } from '../utils/constants';
import { faker } from '@faker-js/faker';

describe('Get users (e2e)', () => {
  const app = APP_URL;
  const newUserPassword = `secret`;
  const fullName = 'Slavik Ukraincev';
  const username = faker.internet
    .userName()
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '');
  const country = 'Ukraine';
  const speciality = 'Developer';
  const focus = 'Backend Developer';
  const experience = '1 year';
  const coreTools = ['C', 'C++', 'TS', 'JS'];
  const additionalTools = ['NestJS', 'NextJS'];

  it('Register new user with fullName for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        fullName: fullName,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.fullName).toBe(fullName);
      });
  });

  it('Register new user with username for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        username: username,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.username).toBe(username);
      });
  });

  it('Register new user with country for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        country: country,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.country).toBe(country);
      });
  });
  //
  it('Register new user with skills for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        skills: {
          __type: 'dev',
          speciality: speciality,
          focus: focus,
          coreTools: ['C++'],
        },
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.skills.speciality).toBe(speciality);
      });
  });

  it('Register new user with experience for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: experience,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe(experience);
      });
  });
  //
  it('Register new user with core tools for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        skills: {
          speciality: speciality,
          focus: focus,
          coreTools: coreTools,
          __type: 'dev',
        },
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.skills.coreTools).toEqual(coreTools);
      });

    // make sure different type won't work
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        skills: {
          coreTools: [],
          speciality: 'designer',
          __type: 'dev',
        },
      })
      .expect(422)
      .expect(({ body }) => {
        expect(body.errors).toBeDefined();
      });
  });
  //
  it('Register new user with additional tools for tests: /api/v1/auth/email/register (POST)', async () => {
    const email = faker.internet.email();
    await request(app)
      .post('/api/v1/auth/email/register')
      .send({
        email: email,
        password: newUserPassword,
      })
      .expect(204);

    const newUserApiToken = await request(app)
      .post('/api/v1/auth/email/login')
      .send({ email: email, password: newUserPassword })
      .then(({ body }) => body.token);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        skills: {
          speciality: speciality,
          focus: focus,
          coreTools: coreTools,
          additionalTools: additionalTools,
          __type: 'dev',
        },
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.skills.additionalTools).toEqual(additionalTools);
      });
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

  it('Get users with fullName filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"fullName": "${fullName}"}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].fullName).toBe(fullName);
        }
      });
  });

  it('Get users with username filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"username": "${username}"}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].username).toBe(username);
        }
      });
  });

  it('Get users with country filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"countries": ["${country}"]}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].country).toBe(country);
        }
      });
  });

  it('Get users with speciality filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"specialities": ["${speciality}"]}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].skills.speciality).toBe(speciality);
        }
      });
  });

  it('Get users with experience filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"experience": "${experience}"}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].experience).toBe(experience);
        }
      });
  });

  it('Get users with coreTools filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"coreTools": ["JS"]}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[i].skills.coreTools).toContain('JS');
        }
      });
  });

  it('Get users with additionalTools filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters={"additionalTools": ["NestJS"]}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[i].skills.additionalTools).toContain('NestJS');
        }
      });
  });
});
