//1) Lets see the mullti line string
let str = `Hi
        I am sanketh
        And I      welcome
        you to ES6`;
console.log(str); // This will print exactly the same way in new lines by not ignoring the spaces 

//2) Lets see the example of str concatenation and use of ' and "" in between the string
let fstr = `Hi he dsn't that I "sanketh" is coming`;
let lstr = `to the office!`;
console.log(`${fstr} ${lstr}`); //Hi he dsn't that I "sanketh" is coming to the office!