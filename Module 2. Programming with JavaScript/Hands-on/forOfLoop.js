var my_obj = {
    name:'sanketh',
    profession:'software developer',
    isDevotee:true,
    dreamCompany:['Meta','Google','Microsoft']
}
//console.log(my_obj);// This prints the entire object {name: 'sanketh',profession: 'software developer',isDevotee: true,dreamCompany: [ 'Meta', 'Google', 'Microsoft' ]}
//lets first see how to use for of loop in arrays
let arr = ['tea',1,'coffee',true];
for(val of arr){
    console.log(val);
}

//Now lets explore how to use for of loop for the object
//We cannot directly use as the above because objects are not iterable
// For this we have 3 built-in methods
//  1) Object.keys(object_name) ----> stores all the property keys of the object specified as array
//  2) Object.values(object_name) ----> stores all the property values of the object specified as array
//  3) Object.entries(object_name) ----> stores both keys and values as arrays 
  //      ex--> [['name':'sanketh],['profession:'software developer],['isdevotee':true],[[dreamCompany]:['Meta','Google','Microsoft']]];


//Now lets see the programmatic code

for(val of Object.keys(my_obj)){
    console.log(val,':',my_obj[val]);
}