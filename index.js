var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const userServiceProxy = httpProxy('localhost:3001');
const productServiceProxy = httpProxy('localhost:3001');

//Proxy request
app.get('/users', (request, response, next) => {
  userServiceProxy(request, response, next);
});

app.get('/products', (request, response, next) => {
  productServiceProxy(request, response, next);
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


var server = http.createServer(app);
server.listen(8787);