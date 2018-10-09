const EventEmitter = require('events').EventEmitter;

function Dog(name, energy) {

  var _name=name;

  var _energy=energy;
 var _listeners={}
    EventEmitter.call(this);

    var timer =global.setInterval(() => {

      if(_energy > 0) {
                this.emit('bark');
                  _energy--;


            }else {
                    global.clearInterval(timer);    
            }
              
          }, 1000);

    function emit(e){
      _listeners[e].forEach((fn)=>{
        fn.call(this,arg);
      })
    }



            this.name = () => _name;
            this.energy = () => _energy;
            this.on=(e,fn){
              if(typeof (_listeners[e])==='undefined'){
                _listeners[e]=[];
              _listeners[e].push(fn);
              
            };
}
