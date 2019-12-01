const httpProxy = require('express-http-proxy');
const usersServiceProxy = httpProxy(process.env.MICROSSERVICE_USERS);

module.exports = {
  async index(request, response, next){
    usersServiceProxy(request, response, next);
  },

  async signUp(request, response, next){
    await usersServiceProxy(request, response, next);
  },
  async edit(request, response, next){
    usersServiceProxy(request, response, next);
  }
}
