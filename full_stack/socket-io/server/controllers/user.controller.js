const { User } = require('../models/user.model');

module.exports.index = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
}
module.exports.newUser = (req, res) => {
  const { firstName, lastName } = req.body;
  User.create({ firstName, lastName })
    .then(user => res.json(user))
    .catch(err => res.json(err))
}