const { Author } = require('../models/author.model')
// const { Book } = require('../models/book.model')
module.exports.getAllAuthors = (req, res) => {
    // sort by last name
    Author.find().sort({lastName: 'asc'})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.newAuthor = (req, res) => {
    const { firstName, lastName, date_of_birth, date_of_death } = req.body;
    Author.create({ firstName, lastName, date_of_birth, date_of_death })
        .then(author => res.json(author))
        .catch(err => {
            res.status(400).json(err)
        })

}

module.exports.updateAuthor = (req, res) => {
    const { firstName, lastName, date_of_birth, date_of_death } = req.body
    Author.findOneAndUpdate({ _id: req.params.id }, { firstName, lastName, date_of_birth, date_of_death }, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json(err))
}