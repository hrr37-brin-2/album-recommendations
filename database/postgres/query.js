const { Client } = require('pg');

const client = new Client({
  host:'127.0.0.1',
  database: 'recommendations',
  port: 5432,
});

client.connect();

// test queries

console.time('finished postgres query in');

client.query('SELECT * FROM albums where id = 10000000', (err, res) => {
  if (err) { console.log(err); }
  else { console.log(res.rows); }
});

console.timeEnd('finished postgres query in');
