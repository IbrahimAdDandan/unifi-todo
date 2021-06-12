const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    firstname: String,
    lastname: String,
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    deleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports.User = mongoose.model('User', UserSchema);