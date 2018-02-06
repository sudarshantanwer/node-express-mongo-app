/**
 * Created by sudarshan on 2/2/18.
 */
var events = require('events')

var eventEmitter = new events.EventEmitter();

eventEmitter.on('myRandomEvent', function () {
   console.log('event fired');
});