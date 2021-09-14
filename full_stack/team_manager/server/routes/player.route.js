const PlayerController = require('../controllers/player.controller');
module.exports = function(app){
  app.get('/api/players/list', PlayerController.index);
  app.post('/api/players/new', PlayerController.newPlayer);
  app.delete('/api/players/delete/:id', PlayerController.deletePlayer)
  app.put('/api/players/update/:id' , PlayerController.updatePlayerGame)
}
