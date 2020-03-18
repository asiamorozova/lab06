  
module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  const res = `HTTP/1.1 ${status}\nAccept-Ranges: bytes\nContent-Length: ${body.length}\nContent-Type: ${contentType}\n\n${body}`;
  return res;
};






// const createResponse = require('./createResponse');

// describe('createResponse', () => {
//   it('creates a valid HTTP response', () => {
//     const response = createResponse({
//       body: '<h1>Judas Priest is Tight</h1>',
//       status: '200 OK',
//       contentType: 'text/html'
//     });

//     expect(response).toEqual(`HTTP/1.1 200 OK
// Accept-Ranges: bytes
// Content-Length: 17
// Content-Type: text/html
// <h1>Judas Priest is Tight</h1>`);
//   });
// });
