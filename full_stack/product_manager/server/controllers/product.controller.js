const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
}
module.exports.newProduct = (req, res) => {
  const { title, price, description } = req.body;
  Product.create({ title, price, description })
    .then(product => res.json(product))
    .catch(err => res.json(err))
}