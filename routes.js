/**
 * Created by sudarshan on 6/2/18.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');


// router.get('/:id/:name', function(req, res){
//     // res.send('GET route on things.');
//     res.send('id: ' + req.params.id + ' and name: ' + req.params.name)
// });
router.post('/', function(req, res){
    res.send('POST route on things.');
});

router.get('/', function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(fs.readFileSync('index.html'));
});



//export this router to use in our index.js
module.exports = router;