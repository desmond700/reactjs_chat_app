
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    sender: String,
    receiver: String,
    message: String,
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('chats', MessageSchema);