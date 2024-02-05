import EventEmitter from "events";
// const myEmitter = require("events");

const myEmitter= new EventEmitter();
myEmitter.on('firstevent',(arg1, arg2) => {
    console.log('Event occured with argument:',arg1, arg2);
})

myEmitter.once('Firstevent',(arg1,arg2) => {
    console.log('This listener will be executed only once.');
})

myEmitter.emit('firstevent', 'Hello', 'hi');