const mongoose = require('mongoose');

const { Schema } = mongoose;

const submitSchema = new Schema(
    {
        userId: {
            type: String,
            required: 'userId cannot be blank'
        },
        questionId: {
            type: String,
            required: 'questionId cannot be blank'
            
        },
        status: {
            type: Boolean,
            required: 'status cannot be blank',
        },
        result: {
            type: String,
            required: 'result cannot be blank'
        },
        score: {
            type: Number,
            required: 'score cannot be blank'
        },
        oldScore: {
            type: Number
        },
        createAt: {
            type: Date,
        },
        updateAt: {
            type: Date,
        }
    },
    {collection: 'submits'}
);

module.exports = mongoose.model('submits', submitSchema);