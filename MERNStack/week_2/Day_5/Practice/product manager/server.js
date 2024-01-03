const express = require("express")
const cors = require("cors")
const app = express();


// ====MIDDLEWARES====
app.use(cors(),express.json(),express.urlencoded({extended:true}));

require("dotenv").config()
const PORT  = process.env.PORT;

app.listen(PORT , ()=> console.log('Listennig on port ${PORT} for request 😡😡😡😡 '));