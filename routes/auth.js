//
//
//  // Used to handle authentication
//
//

const express = require('express')
const router = express.Router()

router.get('/getUsers', function(req, res, next){
    res.json('get user endpoint')
})

router.post('/createUser', function(req, res, next){
    res.json('Create User')
})

router.post('/logIn', function(req, res, next){
    res.json('sign in to account')
})
router.post('/signOut', function(req, res, next){
    res.json('Log Out of Account')
})

module.exports = router;

