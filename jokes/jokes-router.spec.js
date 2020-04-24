const request = require('supertest');

const server = require('../api/server');
const db = require('../database/dbConfig.js');

describe('JOKES-ROUTER', () => {
  describe('GET JOKES // fail', () => {
    it('should return 400', () => {
      return request(server)
        .get('/api/jokes')
        .then((res) => {
          expect(res.status).toBe(400);
        });
    });
  });
  describe('GET JOKEs // success', () => {
    it('should return jokes', () => {
      return request(server)
        .get('/api/server')
        .set(
          'authorization',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTU4Nzc0Mzg1MywiZXhwIjoxNTg3ODMwMjUzfQ.HNyP2L7VbfJ27mJPULB25BOn0vUuafXC0keK9TW58bY'
        )
        .then((res) => {
          expect(res.body).toBeTruthy();
        });
    });
  });
});
