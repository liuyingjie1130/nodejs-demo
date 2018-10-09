#!/user/bin/node

const pi = Math.PI;

module.exports = (r) => {
  return{
    circumference: function circumference(){return 2*pi*r},
   area: function area(){return pi*r*r}
  };
}

console.dir(module);


