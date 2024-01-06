const {Author} = require("../models/authors.model");

module.exports = {
    // Read All
    findAllAuthors: (req, res) => {
        Author.find({})
            .then((authors) => {
                res.json(authors);
            })
            .catch(err => {
                res.json(err);
            });
    },

    // Read One 
    findOneSingleAuthor: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then((oneSingleAuthor) => {
                res.json(oneSingleAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Create 
    createNewAuthor: (req, res) => {
        Author.create(req.body)
            .then((newlyCreatedAuthor) => {
                res.json(newlyCreatedAuthor);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Update 
    updateExistingAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedAuthor) => {
                res.json(updatedAuthor);
                console.log(req.params.id); // Corrected from req.param.id to req.params.id
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    // Delete 
    deleteAnExistingAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
};