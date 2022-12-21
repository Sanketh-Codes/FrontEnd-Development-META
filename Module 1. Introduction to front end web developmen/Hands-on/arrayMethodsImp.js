// 1. Lets see the forEach() method of array 
// forEach() takes the function as the parameter
var my_arr = [10,20,30,40,50];
my_arr.forEach(function(num,index){
    console.log(`${index} . ${num}`)
})

//2. Lets see the filter() method of array
// filter() takes the unction as a parameter
my_arr.filter(function(num){
    return num > 30;
})

//To print use as this
function filterNum(num) {
    return num > 20;
}
console.log(my_arr.filter(filterNum));

// 3. Lets see the map() method of array
my_arr.map(function(num) {
    return num/10;
})

//To print use as this
function mapNum(num) {
    return num/10;
}
console.log(my_arr.map(mapNum))

