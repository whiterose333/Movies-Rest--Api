
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

