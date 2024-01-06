const express =require("express");
const cors = require("cors");
const app = express();


//  ========Middlewares=========

app.use(cors(),express.json(), express.urlencoded({ extended:true}));

require("dotenv").config()
const PORT = process.env.PORT;

// db connection 
require("./config/mongoose.config");

//  ROUTES 
require("./routes/note.route")(app);

app.listen(PORT, ()=> console.log('Listennig on port ${PORT} for requests 🕸️😡❤️👇'));
