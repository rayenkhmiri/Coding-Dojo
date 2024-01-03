const jokesController = require('../controllers/jokes.controllers');

module.exports = (app) => {
    app.get('/api/jokes', jokesController.findAllJokes);
    app.get('/api/jokes/:id', jokesController.findOneSingleJoke);
    app.put('/api/jokes/:id', jokesController.updateExistingJoke);
    app.post('/api/jokes', jokesController.createNewJoke);
    app.delete('/api/jokes/:id', jokesController.deleteAnExistingJoke);
}