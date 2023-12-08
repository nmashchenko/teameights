import request from 'supertest';
import { APP_URL, TESTER_EMAIL, TESTER_PASSWORD, MAIL_HOST, MAIL_PORT } from '../utils/constants';

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
                /.*email\?hash\=(\S+).*/g.test(letter.text)
            )
            ?.text.replace(/.*email\?hash\=(\S+).*/g, '$1')
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
                /.*email\?hash\=(\S+).*/g.test(letter.text)
            )
            ?.text.replace(/.*email\?hash\=(\S+).*/g, '$1')
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

  it('New user update universities field: /api/v1/auth/me (PATCH)', async () => {
    const newUniversityData = [
      {
        university: 'UIC',
        degree: 'BA',
        major: 'CS',
        admissionDate: '2019-10-05',
        graduationDate: '2023-10-05',
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
        universities: newUniversityData,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.universities[0].university).toBe(newUniversityData[0].university);
        expect(body.universities[0].degree).toBe(newUniversityData[0].degree);
        expect(body.universities[0].major).toBe(newUniversityData[0].major);
        expect(body.universities[0].admissionDate).toBe(newUniversityData[0].admissionDate);
        expect(body.universities[0].graduationDate).toBe(newUniversityData[0].graduationDate);
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universities: [{}],
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universities: [],
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.universities).toStrictEqual([]);
      });

    // checks entity restrictions
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universities: badUniversityData,
      })
      .expect(500);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universities: emptyUniversityData,
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        universities: wrongDateTypeUniversityData,
      })
      .expect(422);
  });

  it('New user update jobs  field: /api/v1/auth/me (PATCH)', async () => {
    const newJobData = [
      {
        company: 'Spotify',
        title: 'SWE',
        startDate: '2019-10-05 04:26:58.635885',
        endDate: '2023-10-05 04:26:58.635885',
      },
    ];

    // endDate can't be same as startDate
    const badJobData = [
      {
        company: 'Spotify',
        title: 'SWE',
        startDate: '2023-10-05',
        endDate: '2023-10-05',
      },
    ];

    // empty fields
    const emptyJobData = [
      {
        company: '',
        title: '',
        startDate: '2023-10-05',
        endDate: '2023-10-05',
      },
    ];

    // wrong type of date
    const emptyDateJobData = [
      {
        company: 'asdadasd',
        title: 'dasdasdasd',
        startDate: '',
        endDate: '',
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
        jobs: newJobData,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.jobs[0].company).toBe(newJobData[0].company);
        expect(body.jobs[0].title).toBe(newJobData[0].title);
        expect(body.jobs[0].startDate).toBe('2019-10-05');
        expect(body.jobs[0].endDate).toBe('2023-10-05');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        jobs: [{}],
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        jobs: [],
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.jobs).toStrictEqual([]);
      });

    // checks entity restrictions
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        jobs: badJobData,
      })
      .expect(500);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        jobs: emptyJobData,
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        jobs: emptyDateJobData,
      })
      .expect(422);
  });

  it('New user update projects field: /api/v1/auth/me (PATCH)', async () => {
    const newProjectData = [
      {
        title: 'Teameights',
        link: 'https://teameights.com',
      },
    ];

    // endDate can't be same as startDate
    const badProjectData = [
      {
        title: 'Teameights',
        link: 'teameights.123',
      },
    ];

    // empty fields
    const emptyProjectData = [
      {
        title: '',
        link: '',
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
        projects: newProjectData,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.projects[0].title).toBe(newProjectData[0].title);
        expect(body.projects[0].link).toBe(newProjectData[0].link);
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        projects: [{}],
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        projects: [],
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.projects).toStrictEqual([]);
      });

    // checks entity restrictions
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        projects: badProjectData,
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        projects: emptyProjectData,
      })
      .expect(422);
  });

  it('New user update links field: /api/v1/auth/me (PATCH)', async () => {
    const newLinks = {
      github: 'https://github.com/nmashchenko',
      behance: 'https://behance.com',
      linkedIn: 'https://linkedin.com',
      telegram: 'https://telegram.com',
    };

    // endDate can't be same as startDate
    const badLinks = {
      github: 'https://github.11',
      behance: 'https://beance.1',
    };

    // empty fields
    const emptyLinks = {
      github: '',
      behance: '',
      linkedIn: '',
      telegram: '',
    };

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
        links: newLinks,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.links.github).toBe(newLinks.github);
        expect(body.links.behance).toBe(newLinks.behance);
        expect(body.links.telegram).toBe(newLinks.telegram);
        expect(body.links.linkedIn).toBe(newLinks.linkedIn);
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        links: [],
      })
      .expect(422);

    // checks entity restrictions
    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        links: badLinks,
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        links: emptyLinks,
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.links.github).toBe('');
        expect(body.links.behance).toBe('');
        expect(body.links.telegram).toBe('');
        expect(body.links.linkedIn).toBe('');
      });
  });

  it('New user update experience field: /api/v1/auth/me (PATCH)', async () => {
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
        experience: 'something bad',
      })
      .expect(422);

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: 'No experience',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('No experience');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: 'Few months',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('Few months');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: '1 year',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('1 year');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: '2 years',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('2 years');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: '3 years',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('3 years');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: '4 years',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('4 years');
      });

    await request(app)
      .patch('/api/v1/auth/me')
      .auth(newUserApiToken, {
        type: 'bearer',
      })
      .send({
        experience: '5+ years',
      })
      .expect(200)
      .expect(({ body }) => {
        expect(body.experience).toBe('5+ years');
      });
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
