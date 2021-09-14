const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    position: { type: String},
    gameStatuses: {type: Array}
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);