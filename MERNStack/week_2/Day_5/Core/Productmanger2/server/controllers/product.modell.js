const Product = require('../models/product.model');

module.exports = {
    // Read All
    findAllProducts: (req, res) => {
        Product.find()
            .then((products) => {
                res.json(products);
            })
            .catch(err => {
                res.json(err);
            });
    },
    // Read One 
    findOneSingleProduct: (req, res) => {
        Note.findOne({ _id: req.params.id })
            .then((oneSingleProduct) => {
                res.json(oneSingleProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
    // Create 
    createNewProduct: (req, res) => {
        Note.create(req.body)
            .then((newlyCreatedProduct) => {
                res.json(newlyCreatedProduct);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

};