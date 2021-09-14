const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        min: [3, "Title must be atleast 3 characters."],
        max: [20, "Title must not be greater than 20 characters."],
        required:[
            true,
            "Title is a required field."
        ]
    },
    pageNum: {
        type: Number,
        min:[1, 'Page number cannot be less than one'],
        required:[
            true,
            "Page number is a required field"
        ]
    },
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true}

}, {timestamps: true});

module.exports.Book = mongoose.model('Book', BookSchema)






