const { Client } = require('pg');
const path = require('path');

const client = new Client({
  host:'127.0.0.1',
  database: 'pg'
 });

client.connect();
const SRC = path.dirname('/Users/sydneycasey/Desktop/hrr37/album-recommendations/database/postgres/data');

// seeds postgres db using .csv data files

console.time('finished seeding postgres in');

const seedPG = () => {
  for (let i = 0; i < 10; i++) {
    client.query(`COPY albums(albumname,artist,albumart,tags,description) FROM '${SRC}/data/data${i}.csv' DELIMITER ',' CSV HEADER`, (err) => {
      if (err) { console.log(err); }
      else { console.log('successfully seeded pg'); }
    });
  }
};

seedPG();

console.timeEnd('finished seeding postgres in');
