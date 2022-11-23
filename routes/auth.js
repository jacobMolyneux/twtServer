//
//
//  // Used to handle authentication
//
//

const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.get('/getUsers', function(req, res, next){
    res.json('get user endpoint')
})

router.post('/createUser', function(req, res, next){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user.save((err) => {
        if(err){
            return next(err)
        }
    })
    res.json(`user created with username: ${req.body.username} and password: ${req.body.password}`)
})

router.post('/logIn', function(req, res, next){
    res.json('sign in to account')
})
router.post('/signOut', function(req, res, next){
    res.json('Log Out of Account')
})

module.exports = router;

