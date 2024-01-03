const Joke = require('../models/jokes.model');

const findAllJokes = (req, res) => {
    Joke.find()
        .then((allTheJokes) => {
            console.log(allTheJokes);
            res.json(allTheJokes )
        })
        .catch((err) => {
            res.json(err)
        });
}

const findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

const createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

const updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

const deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports = {
    findAllJokes,
    findOneSingleJoke,
    createNewJoke,
    updateExistingJoke,
    deleteAnExistingJoke
};