/**
 * Created by sudarshan on 2/2/18.
 */
var http = require('http');
var fs = require('fs');
var express = require('express');
var events = require('events')
var app = express();

http.createServer(function (request, response) {
    console.log('Started')

    response.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body as "Hello World"
    response.end(fs.readFileSync('index.html'));
    // response.end(JSON.stringify({a:fs.readFileSync('input.text').toString()}));
}).listen('8081');

debugger;
var eventEmitter = new events.EventEmitter();

eventEmitter.emit('myRandomEvent');

// console.log('Server started')
