/**
 * Created by yidon on 04/07/2017.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    title: {
        type: String,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    }
});

module.exports = mongoose.model('Task', TaskSchema);
