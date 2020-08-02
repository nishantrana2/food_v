const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const menuRouter = require('./routers/menu')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(userRouter)
app.use(menuRouter)

var cors = require('cors')

// app.use(cors()) // Use this after the variable declaration
var cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });


app.get("/", (req, res) =>
    res.send(`Node and express server running on port 4000`)
);

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})