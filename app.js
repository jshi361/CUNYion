
var express = require('express');
const passport = require('./middlewares/authentication');
const expressSession = require('express-session');
var app = express();
app.set('port', process.env.PORT || 3000);

//Encrypt URL
app.disable('x-powered-by');


//Load Views

//Enable sessions & passport
app.use(passport.initialize());
app.use(passport.session());
app.use(expressSession(({secret: 'SomeName',resave: false,saveUninitialized: true})));


const models = require('./models');

const controllers = require('./controllers');
app.use(controllers);

// const { Pool, Client } = require('pg')
//
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ftdb',
//   password: 'password',
//   port: 5432,
// })
//
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
//
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'ftdb',
//   password: 'password',
//   port: 5432,
// })
// client.connect()
//
// client.query('SELECT * FROM ACCOUNT', (err, res) => {
//   console.log(err, res)
//   client.end()
// })


/*
Express Middlewares, catch request before process to the get/post handlers
 */
// app.use((request, response, next) => {
//     console.log(request.headers)
// next()
// })
//
// app.use((request, response, next) => {
//     request.chance = Math.random()
// next()
// })

models.sequelize.sync({force: false})
.then(() => {
  app.listen(3000);
});
