const httpProxy = require('express-http-proxy');
const storyServiceProxy = httpProxy(process.env.MICROSSERVICE_POST);

module.exports = {
  async index(request, response, next){
    storyServiceProxy(request, response, next);
  }
}
