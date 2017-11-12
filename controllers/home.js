var express = require('express');
var router = express.Router();
// var pg = require('pg');
// var connect = "postgres://jshi361:983096@localhost/recipes";

/* GET home page. */

const { Pool, Client } = require('pg')

// const pool = new Pool({
//   user: 'jshi361',
//   host: 'localhost',
//   database: 'hats',
//   password: '983096',
//   port: 5432,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  user: 'jshi361',
  host: 'localhost',
  database: 'recipes',
  password: '983096',
  port: 5432,
})

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// })

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });

});

module.exports = router;
