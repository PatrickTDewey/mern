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

module.exports.register = (req, res) => {
  User.exists({email: req.body.email})
    .then(userExists => {
      // if user exists send back an error
      if (userExists) {
        return Promise.reject({
          errors: {'duplicate': "Email already exists."}
        })
      }
      //if user dne
      const user = new User(req.body)
      return user.save()
    })
    .then((user) => res.json({msg: 'Success', user}))
    .catch(err => {
      res.status(400).json(err)
    })
}

module.exports.login = (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user === null) {
        res.status(400).json({msg: 'User not found'})
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then(passwordIsValid => {
            if (passwordIsValid) {
              const newJWT = jwt.sign({
                _id: user._id,
              }, process.env.SECRET_KEY)
              res.cookie("usertoken", newJWT, { httpOnly: true }).json("success")
            } else {
              res.status(400).json({msg: 'Invalid Attempt'})
            }
          })
          .catch((err) => res.status(400).json({msg:'password error catch'}))
      }
    })
}