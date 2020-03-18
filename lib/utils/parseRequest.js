module.exports = rawRequest => {
  const pattern = /(?<method>\w+)\s(?<path>\/\w*)/;
  const parse = rawRequest.match(pattern).groups;

  if(rawRequest.includes('\r')) {
    const bodySplit = rawRequest.split('\n');
    const body = bodySplit[bodySplit.length - 1];
    parse.body = body;
  }
  return parse;
};



// module.exports = rawRequest => {
  
//   const pattern = /(?<method>\w+)\s(?<path>\/\w*)/;
//   const parse = rawRequest.match(pattern).groups;
  
//   //const [method, path] = rawRequest.split('\n')[0].split(' ');
//   //const [, body] = rawRequest.split('\r\n\r\n');

//   if(rawRequest.includes('\r')) {
//     const bodySplit = rawRequest.split('\n');
//     const body = bodySplit[bodySplit.length - 1];
//     parse.body = body;
//   }
  
//   return parse;
// };
