const AuthorController = require('../controllers/author.controller');
module.exports = function (app) {
  app.get('/api/authors/', AuthorController.getAllAuthors);
  app.get('/api/authors/:id', AuthorController.getAuthor)
  app.post('/api/authors/new', AuthorController.newAuthor);
  app.put('/api/authors/update/:id', AuthorController.updateAuthor)
  app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor)
}
