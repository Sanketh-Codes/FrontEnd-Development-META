const addingTes = require('./addingTestCode');// This line is just like importing the required file where function is present

test('I am passing two parameters and adding those', ()=>{
    expect(addingTes(1,2)).toBe(3);
})