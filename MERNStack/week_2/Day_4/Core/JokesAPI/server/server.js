const express = require("express");
require("dotenv").config();
require("./config/mongoose.config");
const app = express();
const port = process.env.port;

// MiddleWare
// make sure these lines are above any app.get or app.post code blocks

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is up and running on port ${port} 🚀🚀`);
});