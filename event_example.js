const EventEmitter = require('events');
const emitter = new EventEmitter();

// A listener will be called when event is raised
// Register a listener
emitter.on('messageLogged', function(args){
// emitter.on('messageLogged', (args)=>{
	console.log('Listener called', args);
});
 
// Making a noise, produce sth, signaling
// Raise an event
emitter.emit('messageLogged', {id: 1, url:'http://'});
