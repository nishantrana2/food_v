const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    username: { type: String, unique: true, required: true }, 
    accountType: { type: String, required: true },
    restaurantName: {type: String, required: true},
    cusines: {type: Array, required: true},
    imageURL: {type: String, required: true},
    restaurantDescription: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },

})

module.exports = User