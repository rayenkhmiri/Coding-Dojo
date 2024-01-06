const express = require("express")
const cors = require("cors")
require('dotenv') .config();
const app = express()

// Middlewares
app.use(cors(), express.json(), express.urlencoded({extended:true}));

require ("dotenv").config()
const PORT = process.env.PORT;

// DB Connection
require ("./config/mongoose.config");

// Routes 
// require("./routes/authors.routes")(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT} for requests ❤️‍🔥`));