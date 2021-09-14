const { Player } = require('../models/player.model');

module.exports.index = (req, res) => {
  Player.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
}
module.exports.newPlayer = (req, res) => {
  const { firstName, lastName, position } = req.body;
  Player.create({ firstName, lastName, position, gameStatuses: [0,0,0] })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err))
}
module.exports.updatePlayerGame = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedGame => res.json(updatedGame))
      .catch(err => res.json(err))
  
}
module.exports.deletePlayer = (req, res) =>{
  Player.deleteOne({_id:req.params.id})
      .then(conf => res.json(conf))
      .catch(err => res.json(err))
}