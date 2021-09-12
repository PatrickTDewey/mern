const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min: [3, "First Name must be atleast 3 characters."],
        max: [20, "First Name must not be greater than 20 characters."],
        required:[
            true,
            "First Name is a required field."
        ]
    },
    lastName: {
        type: String,
        min: [3, "Last Name must be atleast 3 characters."],
        max: [20, "Last Name must not be greater than 20 characters."],
        required:[
            true,
            "Last Name is a required field."
        ]
    },
    date_of_birth: {type: Date},
    date_of_death: {type: Date},

}, {timestamps: true})

module.exports.Author = mongoose.model('Author', AuthorSchema )