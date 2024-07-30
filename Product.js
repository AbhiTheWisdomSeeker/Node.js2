const mongoos = require('mongoose');

const PSchema = new mongoos.Schema({
    modelName:String,
    Brand:String,
    price:Number,
    category:String 
})

module.exports = mongoos.model('Products',PSchema)