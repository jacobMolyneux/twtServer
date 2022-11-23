const mongoose = require('mongoose')
const Tweet = require('../models/tweetModel')
const User = require('../models/userModel')

exports.create_tweet = (req,res,next) =>{
    const tweet = new Tweet({
        author: req.body.author,
        text: req.body.text,
        likes: 0,
        created_at: Date.now()
    })
    tweet.save((err) => {
        if(err){
            return next(err)
        }
        res.json(`sent tweet with info: ${req.body.author} and ${req.body.text}`)
    })
}

