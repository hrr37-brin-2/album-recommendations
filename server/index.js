// require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/postgres/index.js');
const path = require('path');

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get(`/:id`, (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
});


app.get('/api/albums/1', (req, res) => {
  let id = Math.floor(Math.random() * Math.floor(10000000));
  db.getRecommendedAlbums([id], (err, result) => {
    if (err) { console.log(err); res.send(500, err); }
    else { res.send(result.rows[0]); }
  });
});

app.get('/api/albums/2', (req, res) => {
  let id = Math.floor(Math.random() * Math.floor(10000000));
  db.getRecommendedAlbums([id], (err, result) => {
    if (err) { console.log(err); res.send(500, err); }
    else { res.send(result.rows[0]); }
  });
});

app.get('/api/albums/3', (req, res) => {
  let id = Math.floor(Math.random() * Math.floor(10000000));
  db.getRecommendedAlbums([id], (err, result) => {
    if (err) { console.log(err); res.send(500, err); }
    else { res.send(result.rows[0]); }
  });
});

app.get('/api/albums/4', (req, res) => {
  let id = Math.floor(Math.random() * Math.floor(10000000));
  db.getRecommendedAlbums([id], (err, result) => {
    if (err) { console.log(err); res.send(500, err); }
    else { res.send(result.rows[0]); }
  });
});

app.get('/api/albums/5', (req, res) => {
  let id = Math.floor(Math.random() * Math.floor(10000000));
  db.getRecommendedAlbums([id], (err, result) => {
    if (err) { console.log(err); res.send(500, err); }
    else { res.send(result.rows[0]); }
  });
});

app.get(`/api/album/:id`, (req, res) => {
  let {id} = req.params;
  db.getDataForId([id], (err, results) => {
    if (err) {
      console.log('error getting data in server', err);
      res.send('oops, something went wrong!');
    } else { console.log(results.rows[0]); res.send(results.rows[0]); }
  });
});

app.post(`/api/albums`, (req, res) => {
  db.addNewAlbum(req.body, (err) => {
    if (err) { console.log(err); res.status(500); }
    else { res.status(201).send('successfully added album'); }
  });
});

app.listen(port, () => { console.log(`app listening on port ${port}`); });
