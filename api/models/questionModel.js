const mongoose = require('mongoose');

const { Schema } = mongoose;

const questionSchema = new Schema(
    {
        title: {
            type: String,
            required: 'title cannot be blank'
        },
        unit: {
            type: String, 
            required: 'unit cannot be blank'  
        },
        input: {
            type: Object, 
            required: 'input cannot be blank',
        },
        output: {
            type: Object, 
            required: 'output cannot be blank'
        },
        issuer: {
            type: String, 
            default: ''
        },
        detail: {
            type: String, 
            default: ''
        },
        detail_input: {
            type: String, 
            default: ''
        },
        detail_output: {
            type: String, 
            default: ''
        },
        note: {
            type: String, 
            default: ''
        },
        image: {
            type: String, 
            required: 'image cannot be blank'
        },
        pdfLink: {
            type: String, 
            required: 'pdfLink cannot be blank'
        },
        rank: {
            type: Number, 
            required: 'rank cannot be blank'
        },
        ex_input: {
            type: Object, 
            required: 'ex_input cannot be blank',
        },
        ex_output: {
            type: Object, 
            required: 'ex_output cannot be blank'
        },
        status: {
            type: Boolean, 
            default: 0
        },
        finished: {
            type: Number, 
            default: 0
        }
    },
    {collection: 'questions'}
);

module.exports = mongoose.model('questions', questionSchema);