// same thing which we did in string we do in the number as well 

const newNumber = new Number(100);

console.log(newNumber.toString().length);
console.log(newNumber.toFixed(2));   //Adds the precisions it will print 100.00 till the precision added here it is 2

const otherNumber = 1000000
console.log(otherNumber.toLocaleString('en-IN'));  //adds commas as per indian standards as we have added that we need indian standards 'en-IN'

// +++++++++++++ MATH +++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));
console.log(Math.min( 3 , 5 ,2 ,1, 1));
console.log(Math.max( 3 , 5 ,2 ,1, 1));

console.log(Math.random());   //the value will always be in between  0 and 1
console.log(Math.random() *10); 
