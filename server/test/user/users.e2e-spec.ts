import request from 'supertest';
import { APP_URL } from '../utils/constants';
import { faker } from '@faker-js/faker';
import qs from 'qs';

describe('Get users (e2e)', () => {
  const app = APP_URL;
  const newUserPassword = `secret`;
  const fullName = 'Slavik Ukraincev';
  const username = faker.internet.userName().toLowerCase();
  const country = 'Ukraine';
  const speciality = 'Backend Developer';
  const experience = '1 year';
  const programmingLanguages = ['C', 'C++', 'TS', 'JS'];
  const frameworks = ['NestJS', 'NextJS'];

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
  it('Register new user with speciality for tests: /api/v1/auth/email/register (POST)', async () => {
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
        speciality: speciality,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.speciality).toBe(speciality);
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
        skills: {
          programmingLanguages: programmingLanguages,
          type: "developer"
        }
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.skills.programmingLanguages).toEqual(programmingLanguages);
      });

    // make sure different type won't work
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        skills: {
          programmingLanguages: programmingLanguages,
          type: "designer"
        }
      })
      .expect(422)
      .expect(({ body }) => {
        expect(body.error).toBeDefined();
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
        "skills": {
          "frameworks": frameworks,
          "type": "developer"
        }
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.skills.frameworks).toEqual(frameworks);
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

  it('Get users with speciality filter: /api/v1/users?filters= (GET)', () => {
    const filters = {
      filters: {
        speciality: speciality,
      },
    };

    return request(app)
      .get(`/api/v1/users?${qs.stringify(filters)}`)
      .expect(200)
      .send()
      .expect(({ body }) => {
        for (let i = 0; i < body.data.length; i++) {
          expect(body.data[0].speciality).toBe(speciality);
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
          expect(body.data[i].skills.programmingLanguages).toContain('JS');
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
          expect(body.data[i].skills.frameworks).toContain('NestJS');
        }
      });
  });
});
