const request = require('supertest');
const { app, server } = require('../index');
const { name, version } = require('../package.json');

const helpMessage = 'Type a roman numeral (ex. XII) to parse it or a number (ex. 15) to make it a roman numeral.';

// To stop all asynchronous operations in my test so Jest can exit successfully
afterAll(() => {
  server.close();
});


describe('GET /', () => {
  it('responds with name and version', async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, { name, version });
  });
});


describe('POST /', () => {

  it('respond with help message when text is help', async () => {
    await request(app)
      .post('/')
      .send({ text: 'help' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        response_type: 'in_channel',
        text: helpMessage
      });
  });

  it('respond with name and version when text is version', async () => {
    await request(app)
      .post('/')
      .send({ text: 'version' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        response_type: 'in_channel',
        text: `${name} v${version}`
      });
  });

  it('respond with roman number when text is a number in strings', async () => {
    await request(app)
      .post('/')
      .send({ text: '13' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        response_type: 'in_channel',
        text: 'XIII'
      });
  });

  it('respond with number when text is a roman number', async () => {
    await request(app)
      .post('/')
      .send({ text: 'MCMLXXXIX' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        response_type: 'in_channel',
        text: 1989
      });
  });

  it('respond with error message when text is a number out of range', async () => {
    await request(app)
      .post('/')
      .send({ text: '8593' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        response_type: 'in_channel',
        text: 'out of range'
      });
  });

  it('respond with error message when text is a wrong roman numeral', async () => {
    await request(app)
      .post('/')
      .send({ text: 'TS' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        response_type: 'in_channel',
        text: 'Unknown roman numeral'
      });
  });
});
