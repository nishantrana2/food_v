const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://internfoodshala:deadlydude@cluster0-72kxl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})