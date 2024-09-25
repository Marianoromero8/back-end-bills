// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//     res.send("Hello bills")
// })

// app.listen(3000)
// console.log('Server on port', 3000)

const server = require('./src/app.js');
// import { conn } from './src/db.js';

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
