const AuthorsController = require ("../controllers/authors.controller");

module.exports = (app) => {
    app.post("/api/authors", AuthorsController.createNewAuthor)
    app.get("/api/authors", AuthorsController.findAllAuthors);
    app.get("/api/authors/:id", AuthorsController.findOneSingleAuthor)
    app.patch("/api/authors/:id/edit", AuthorsController.updateExistingAuthor)
    app.delete("/api/authors/delete/:id", AuthorsController.deleteAnExistingAuthor)
}