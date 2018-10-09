const EventEmitter = require('events').EventEmitter;

function Dog(name, energy) {
    var _name=name;
    var _energy=energy;

    EventEmitter.call(this);
    var timer =global.setInterval(() => {
      if(_energy > 0) {
           this.emit('bark');
            _energy--;
                              
       }else {
                    global.clearInterval(timer);    
       }
              
    }, 1000);

   this.name = () => _name;
                
   this.energy = () => _energy;

}

Dog.prototype = EventEmitter.prototype;

module.exports = Dog;
