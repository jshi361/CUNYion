var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });

});

module.exports = router;
