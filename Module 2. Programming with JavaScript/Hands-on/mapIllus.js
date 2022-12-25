// To create a map we need to use a new keyword as new Map()
var my_map = new Map();
my_map.set(1,'TCS');
my_map.set(2,'Meta');
my_map.set(3,'Google');
my_map.set(4,'Microsoft');
console.log(my_map); //Map(4) { 1 => 'TCS', 2 => 'Meta', 3 => 'Google', 4 => 'Microsoft' }

// To retreive single map element use get() method

console.log(my_map.get(3)); //Google