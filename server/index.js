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

app.get(`/api/albums`, (req, res) => {
    db.getRecommendedAlbums(1, (err, results) => {
      if (err) {
        console.log('error getting data in server', err);
        res.status(500);
        res.send('oops, something went wrong!' );
      } else {  res.status(200).send(results.rows[0]); }
    });
});

app.get(`/api/album/:id`, (req, res) => {
  let {id} = req.params;
  db.getDataForId([id], (err, results) => {
    if (err) {
      console.log('error getting data in server', err);
      res.status(500).json({ message: 'oops, something went wrong!' });
    } else { console.log(results.rows[0]); res.status(200).send(results.rows[0]); }
  });
});

app.post(`/api/albums`, (req, res) => {
  db.addNewAlbum(req.body, (err) => {
    if (err) { console.log(err); res.status(500); }
    else { res.status(201).send('successfully added album'); }
  });
});

app.listen(port, () => { console.log(`app listening on port ${port}`); });
