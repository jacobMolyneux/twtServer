const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TweetSchema = new Schema ({
    author: {type: String},
    text: {type: String, required: true, minlength: 1, maxlength: 140},
    created_at: {type: Date, required: true, default: Date.now()},
    likes: {type: Number, min: 0, default: 0},
})

module.exports = mongoose.model('Tweet', TweetSchema)