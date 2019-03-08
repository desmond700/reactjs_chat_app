
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    imageName: {type:String, default:"user.png"}
});

module.exports = mongoose.model('users', UserSchema);