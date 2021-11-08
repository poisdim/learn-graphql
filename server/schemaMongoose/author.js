const {model, Schema} = require('mongoose');
const authorSchema = new Schema({
    name: {type: String},
    age: {type: Number},
}, {timestamps: true});

module.exports = model('author', authorSchema);