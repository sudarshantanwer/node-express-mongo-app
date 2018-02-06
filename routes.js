/**
 * Created by sudarshan on 6/2/18.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');


var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personSchema);


// router.get('/:id/:name', function(req, res){
//     // res.send('GET route on things.');
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name)
// });


router.get('/', function(req, res){
    res.send('Get route on things.');

});

router.post('/', function(req, res){
    res.send('POST route on things.');

});

router.post('/save', function(req, res){
    var newPerson = new Person({
        name: 'sud',
        age: 29,
        nationality: 'Indian'
    });

    newPerson.save(function(err, Person){
        if(err)
            console.log(err);
            //res.render('show_message', {message: "Database error", type: "error"});
        else
            console.log('success');

        // res.render('show_message', {
            //     message: "New person added", type: "success"});
    });
    res.send('POST route on things.');

});


router.get('/login', function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});

    Person.find({nationality :'Indian'},function(err, response){
//        console.log(response);
        res.end(JSON.stringify(response));

    });
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end(fs.readFileSync('index.html'));



    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.send('Saved');
});



//export this router to use in our index.js
module.exports = router;