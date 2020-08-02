const express = require('express')
require('./db/mongoose') // only require since only used for connecting mongoose

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



module.exports = app