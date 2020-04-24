const request = require('supertest');

const server = require('../api/server');
const db = require('../database/dbConfig.js');

describe('auth-router', () => {
  describe('register', () => {
    beforeEach(async () => {
      await db('users').truncate();
    });

    it('should return 201', () => {
      const user = {
        username: 'eddie1',
        password: 'eddie1',
      };

      return request(server)
        .post('/api/auth/register')
        .send(user)
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a message with "Welcome!"', () => {
      const user = {
        username: 'eddie1',
        password: 'eddie1',
      };

      return request(server)
        .post('/api/auth/register')
        .send(user)
        .then((res) => {
          expect(res.body.message).toBe('Thanks for registering');
        });
    });

    // it('should add the user to the db', async () => {
    //   const user = {
    //     username: 'eddie1',
    //     password: 'eddie1',
    //   };

    //   const existing = await db('users').where({
    //     username: user.username,
    //   });
    //   expect(existing).toHaveLength(0);

    //   await request(server)
    //     .post(user)
    //     .then((res) => {
    //       expect(res.body.message).toBe('Thanks for registering');
    //     });

    //   const inserted = await db('users');
    //   expect(inserted).toHaveLength(1);
    // });
  });
  describe('LOGIN', () => {
    it('should return a token', () => {
      const user = {
        username: 'eddie1',
        password: 'eddie1',
      };

      return request(server)
        .post('/api/auth/login')
        .send(user)
        .then((res) => {
          expect(res.body.token).toBeTruthy();
        });
    });
    it('should return a message saying "Welcome!"', () => {
      const user = {
        username: 'eddie1',
        password: 'eddie1',
      };

      return request(server)
        .post('/api/auth/login')
        .send(user)
        .then((res) => {
          expect(res.body.message).toBe('Welcome!');
        });
    });
  });
});
