const UserController = require('../controllers/user.controller');
module.exports = function(app){
  app.get('/api/users', UserController.index);
  app.post('/api/users/register', UserController.register);
  app.post('/api/users/login', UserController.login)
}
