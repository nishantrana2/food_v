const mongoose = require('mongoose')

const Menu = mongoose.model('Menu', {
    name: { type: String, required: true },
    itemDescription: { type: String, required: true },
    mealType: { type: String, required: true },
    restaurantId: { type: String, required: true },
    price: {type: Number, required: true},
    menuimage: {type: String, required: true},
    createdDate: { type: Date, default: Date.now },

})

module.exports = Menu

