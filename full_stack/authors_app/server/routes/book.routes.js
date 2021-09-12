const BookController = require('../controllers/book.controller');
module.exports = function (app) {
  app.get('/api/books/', BookController.getAllBooks);
  app.get('/api/books/:book_id', BookController.getBook)
  app.post('/api/books/new', BookController.newBook);
  app.put('/api/books/update/:book_id', BookController.updateBook)
  app.delete('/api/books/delete/:book_id', BookController.deleteBook)
}
