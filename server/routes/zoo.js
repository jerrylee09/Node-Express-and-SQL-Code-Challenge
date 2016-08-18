var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.get('/', function (req, res) {
  // Retrieve zoo from database
  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }
    client.query('SELECT * FROM zoo', function (err, result) {
      done(); // closes connection, I only have 10!

      if (err) {
        res.sendStatus(500);
      }
      res.send(result.rows);
    });
  });
});


router.post('/', function (req, res) {
  var animal = req.body;
  console.log(req.body);

  pg.connect(connectionString, function (err, client, done) {
    if (err) {
      res.sendStatus(500);
    }
    client.query('INSERT INTO zoo (animal, number) '
      + 'VALUES ($1, $2)',
      [animal.animal, animal.number],
      function (err, result) {
        done();

        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
  
});

module.exports = router;