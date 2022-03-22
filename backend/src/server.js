const app = require('./service');

// Listen for incoming HTTP requests
console.log(process.env.PORT, 'heeerrererer' )
const listener = app.listen(process.env.PORT || 55438, () => {
  let host = listener.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  // const port = listener.address().port;
  // eslint-disable-next-line no-console
  console.log('Listening at http://%s%s', host, 55438);
});
