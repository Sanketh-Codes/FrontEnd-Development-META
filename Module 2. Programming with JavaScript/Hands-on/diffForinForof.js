// For in loop with objects
var my_obj = {
    name:'sanketh',
    salary:100000
}
for(val in my_obj){
    console.log(val); //name,salary
}
for(val of Object.keys(my_obj)){
    console.log(val,":",my_obj[val]);//name:sanketh,salary:100000
}
//lets try creating new object reference for my_obj
var obj1 = Object.create(my_obj);
obj1.age = 21;
console.log(obj1); // {age:21}
//Now lets examine the for-in loop behaiour for the new object reference
for(val in obj1){
    console.log(val); //age,name,salary
}
//That means for in loop loops for the both prototype and also the object
//Now lets examine for of loop behavior for the new object reference
for(val of Object.keys(obj1)){
    console.log(val,":",obj1[val]); //age:21
}
//That mans for of loop will only iterate on the object itself

console.log("------FOR ARRAYS-----")

//Lets trye and see for arrays
var arr = [1,2,'sanketh'];
for(val in arr){
    console.log(val); //gives the array idexes in this case 0,1,2
}
for(val of arr){
    console.log(val); // gives the array elements in this case 1,2,sanketh
}