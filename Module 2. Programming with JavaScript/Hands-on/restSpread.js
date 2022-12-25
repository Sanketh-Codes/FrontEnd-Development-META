// 1. Lets see the spread operator implementation
// declaring an array and writing a function and passing an array to it
var arr= ['TCS','Google','Meta','Microsoft','Amazon','infosys','wipro'];
function seeCompaniesRankings(comp1,comp2,comp3,comp4,comp5,comp6,comp7){
    console.log(comp1);
    console.log(comp2);
    console.log(comp3);
    console.log(comp4);
    console.log(comp5);
    console.log(comp6);
    console.log(comp7);
}
//seeCompaniesRankings(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[6],arr[7]);
//We can see that in the function call we need to write each and every index referencing 
// This can be avoided using the spread operator
seeCompaniesRankings(...arr); 
//seeCompaniesRankings(arr); // If you think this as work this takes the entire array as parameter 1 i.e, comp1 and rest all will be undefined

// 2. Lets see the rest operator implementation.
// used to minimise the number of parameters
var arr2 = [10,20,30,40,50];
var inte = 1.2;
function calTotalInterest(inte,...arr){
    return arr2.map(val=> inte * val);
}
console.log(calTotalInterest(inte,arr2));// [ 12, 24, 36, 48, 60 ]
