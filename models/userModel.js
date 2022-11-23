const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    tweets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' }]
})

exports.module = mongoose.model('User', UserSchema)