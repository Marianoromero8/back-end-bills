const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const pg = require('pg');
const { config } = require('dotenv')

const pool = new pg.Pool({
  connectionString: process.env.DB_URL
})

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`Server listening at port 3001`);
 // eslint-disable-line no-console
  });
});
