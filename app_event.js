const EventEmitter = require('events');

const Logger = require('./logger_event');
const logger = new Logger();

// A listener will be called when event is raised
// Register a listener
logger.on('messageLogged', function(args) {
	console.log('Listener called', args);
});
logger.log('message');


