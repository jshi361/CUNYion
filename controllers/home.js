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
  // pg.connect(connect,function(err,client,done){
  //   if(err){
  //     return console.error('error fetching client');
  //   }
  //   client.query('SELECT *From hats',function(err,result){
  //     if(err){
  //       return console.error('error running query',err);
  //     }
  //     // res.render('index',{hats:result.rows});
  //     console.log(result.rows);
  //     done();
  //   });
  // })
// client.connect();

// client.query('SELECT *From hats', (err, res) => {
//   console.log(err, res.rows);
//   client.end();
// })
});

module.exports = router;
