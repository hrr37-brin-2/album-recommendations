const { Client } = require('pg');

const client = new Client({
  host:'127.0.0.1',
  database: 'pg',
});

client.connect();

const getDataForId = (id, callback) => {
  client.query(`SELECT * FROM albums WHERE id = $1`, id, callback);
};

const getRecommendedAlbums = (id, callback) => {
  const query = `SELECT * from albums where id = $1`
  client.query(query, id, callback);
};

const addNewAlbum = (data, callback) => {
  client.query(`insert into albums values($1,$2,$3,$4,$5,$6)`, data, callback);
};

module.exports = {
  getDataForId,
  getRecommendedAlbums,
  addNewAlbum
};
