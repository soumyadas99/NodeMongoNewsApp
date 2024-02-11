const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



const newsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required:true,
    },
    location: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // You may add more fields as needed for your application
});
const News = mongoose.model('News',newsSchema);

module.exports = News;
