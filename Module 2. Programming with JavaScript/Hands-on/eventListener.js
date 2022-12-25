// 1.Here we are writing the function to be executed on click of the h1 heading tag through HTML element by adding onClick attribute and setting to function name
function onClickHeading() {
    console.log('Heading is clicked');  
}

// 2. Here from the console document we are doing the same task by explicitly adding the event listener
// TO do that the steps are
//step1--> first grab the html element for which you want to add the even AudioListener and assign to a variable
const target = document.querySelector('h1');
console.log(target)
//step2---> Then write the function which is already there above
//step3---> to the target variable add the eventListener whoch takes 2 parameters first is the type of event here it is click and the other parameter is functiuon to be executed on clicking
//target.addEventListener('click',onClickHeading);
