require('dotenv').config();
var jwt = require('jsonwebtoken');
var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');

const routes = require('./routes');

const userServiceProxy = httpProxy('localhost:3001');

//Proxy request
app.get('/users', verifyJWT, (request, response, next) => {
  userServiceProxy(request, response, next);
});

app.get('/products', (request, response, next) => {
  productServiceProxy(request, response, next);
});

app.post('/login', (request, response, next) => {
  if(request.body.user === 'luiz' && request.body.password === '123'){
    //auth ok
    const id = 1 // id que vem do banco 
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 600 // 10min
    });
    response.status(200).send({ auth: true, token: token })
  }
  response.status(500).send('LLogin inválido');
});


app.get('/logout', function(request, response) {
  res.status(200).send({ auth: false, token: null });
});


function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);


var server = http.createServer(app);
server.listen(8787);