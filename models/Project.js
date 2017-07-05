/**
 * Created by yidon on 05/07/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
    title: {
        type: String,
        default: 'unknown',
        required: true
    },

    creator:{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },

    member:[{
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }]

});

module.exports = mongoose.model('Project', ProjectSchema);
