require('dotenv').config();
const jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const routes = require('./routes');

app.use(cors({}));
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(routes);


const server = http.createServer(app);
server.listen(8080);