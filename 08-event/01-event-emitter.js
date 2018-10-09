#!/user/bin/node


const EventEmitter=require('events').EventEmitter;

var emitter=new EventEmitter();
emitter.on('hello',()=>{
  console.log('hello event');
});

emitter.on('hello',()=>{
  console.log('HELLO EVENT');
});


emitter.on('bye',()=>{
  console.log('bye event');
})

global.setInterval(()=>{
  emitter.emit('hello');
},500);

global.setTimeout(()=>{
  emitter.emit('bye');

},3000);
