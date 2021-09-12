const { Book } = require('../models/book.model')
module.exports.getAllBooks = (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.json(err))
}
module.exports.getBook = (req, res) => {
    Book.findOne({ _id: req.params.id })
        .then(book => res.json(book))
        .catch(err => res.json(err))
}
module.exports.newBook = (req, res) => {
    const { title, pageNum, author} = req.body;
    
    Book.create({title, pageNum, author})
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err))
}
module.exports.updateBook = (req, res) => {
    const { title, page_num } = req.body
    Book.findOneAndUpdate({ _id: req.params.id }, { title, page_num }, { new: true, runValidators: true })
        .then(updatedBook => res.json(updatedBook))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteBook = (req, res) => {
    Book.delete({ _id: req.params.id })
        .then(deletedBook => res.json(deletedBook))
        .catch(err => res.json(err))
}