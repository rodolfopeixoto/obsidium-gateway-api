const express = require('express');
const StoryController = require('./controllers/StoryController');
const UsersController = require('./controllers/UsersController');

const routes = express.Router();
routes.get('/users', UsersController.index);
routes.post('/users', UsersController.signUp);
routes.put('/users', UsersController.edit);

routes.get('/stories', StoryController.index);

module.exports = routes;