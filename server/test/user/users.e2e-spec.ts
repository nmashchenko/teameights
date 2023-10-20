import request from 'supertest';
import { APP_URL } from '../utils/constants';
import { faker } from '@faker-js/faker';

describe('Get users (e2e)', () => {
  const app = APP_URL;
  const newUserPassword = `secret`;
  const fullName = 'Slavik Ukraincev';
  const username = faker.internet.userName().toLowerCase();
  const country = 'Ukraine';
  const concentration = 'Backend';
  const experience = '1 year';
  const programmingLanguages = ['C', 'C++', 'TS', 'JS'];
  const frameworks = ['NestJS', 'NextJS', 'Figma'];

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
  it('Register new user with concentration for tests: /api/v1/auth/email/register (POST)', async () => {
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
        concentration: concentration,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.concentration).toBe(concentration);
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
  it('Register new user with programmingLanguages for tests: /api/v1/auth/email/register (POST)', async () => {
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
        programmingLanguages: programmingLanguages,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.programmingLanguages).toEqual(programmingLanguages);
      });
  });
  //
  it('Register new user with frameworks for tests: /api/v1/auth/email/register (POST)', async () => {
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
        frameworks: frameworks,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.frameworks).toEqual(frameworks);
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
      .get(`/api/v1/users?filters%5BfullName%5D=Slavik%20Ukraincev`)
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
      .get(`/api/v1/users?filters%5Busername%5D=${username}`)
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
      .get(`/api/v1/users?filters%5Bcountry%5D=${country}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].country).toBe(country);
        }
      });
  });

  it('Get users with concentration filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters%5Bconcentration%5D=${concentration}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].concentration).toBe(concentration);
        }
      });
  });

  it('Get users with experience filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters%5Bexperience%5D=${experience}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].experience).toBe(experience);
        }
      });
  });

  it('Get users with programmingLanguages filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters%5BprogrammingLanguages%5D%5B0%5D=JS`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[i].programmingLanguages).toContain('JS');
        }
      });
  });

  it('Get users with frameworks filter: /api/v1/users?filters= (GET)', () => {
    return request(app)
      .get(`/api/v1/users?filters%5Bframeworks%5D%5B0%5D=NestJS`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[i].frameworks).toContain('NestJS');
        }
      });
  });
});
