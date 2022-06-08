const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String, 
            required: 'name cannot be blank'
        },
        username: {
            type: String,
            required: 'username cannot be blank'
        },
        password: {
            type: String,
            required: 'password cannot be blank',
            unique: true
        },
        group: {
            type: Number,
            required: 'group cannot be blank'
        },
        score: {
            type: Number,
            default: 0
        },
        finished: {
            type: Number,
            default: 0
        }
    },
    {collection: 'users'}
);

module.exports = mongoose.model('users', userSchema);