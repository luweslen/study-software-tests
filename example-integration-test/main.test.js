const request = require('supertest');
const server = require('./main');

// Depois de finalizar o teste, fecha o server
afterAll(() => {
  server.close();
});

describe('GET /isPrime/:number', () => {
  test('Testing return true with prime number', async () => {
    const response = await request(server).get('/isPrime/53');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('true');
  });
  
  test('Testing return true with non-prime number', async () => {
    const response = await request(server).get('/isPrime/52');
    expect(response.status).toEqual(200);
    expect(response.text).toContain('false');
  });
});