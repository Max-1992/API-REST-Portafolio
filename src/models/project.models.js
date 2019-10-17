// Imports
const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    langs: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    year: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Project', ProjectSchema);