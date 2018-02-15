/**
 * Created by sudarshan on 8/2/18.
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var profile = mongoose.Schema({
    username: String,
    password: String,
    userId: String,
    email: String
});

var Profile = mongoose.model("Auth", profile);

router.get('/login', function(req, res){
    res.send('Get route on things.');

});

router.post('/signup', function(req, res){

    //res.writeHead(200, {'Content-Type': 'application/json'});
    console.log('username - '+JSON.stringify(req.body));
// console.log('password - '+req.body.password);
    res.send({status : 1});

});



module.exports = router;