/**
 * Created by yidon on 04/07/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
    first_name: {
        type: String,
        default: 'unknown',
        required: true
    },

    last_name: {
        type: String,
        default: 'unknown',
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    birthDate: {
        type: Date,
    },
    tasks:[{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
    projects:[{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
});

module.exports = mongoose.model('Person', PersonSchema);
