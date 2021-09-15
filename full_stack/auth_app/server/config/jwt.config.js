const jwt = require('jsonwebtoken')


console.log(process.env.SECRET_KEY);
module.exports.authenticate = (req, res, next) => {
    console.log("COOKIE", req.cookies);
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(400)
        }
    })
}