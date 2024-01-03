// jokes.model.js
const mongoose = require('../config/mongoose.config');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
    },
    punchline : {
        type:String,
        required:true,
    }
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;