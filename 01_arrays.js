const myArr = [ 0 , 1,2,3, 4, 5 ]


myArr.push(6);
myArr.push(8);
myArr.push(8);
myArr.pop()   //just deletes the last element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(19))   //this does not exist hence it will print -1 for even 29 , 19 , or anythign which doesnt exist

// console.log(myArr);

//slice and splice 

// const myn1 = myArr.slice(1, 4);  //slice does not include the upper limit value and also does not change the original array
// console.log(myn1);
// console.log("A" , myArr); // [0 ,1 ,2 3, 4 , 5, 6, 8]


// const myn2 = myArr.splice(1, 4);  //splice includes the upper limit value and also changes the original array
// console.log(myn2);
// console.log("B", myArr);  // [ 0 , 5, 6, 8]


//we can push a complete array as well into an array bit that would be added as a single array
//concat adds the new array into another and gives a new combined array while push was just pushing into previous array

//and spreading means just spread the value into individuals and add into one like the syntax is [...arr1 , ...arr2]
//so the above code will give a new array with arr1 and arr2 combined.


// console.log(Array.isArray("Prajwal"))
// console.log(Array.from("Prajwal"))  //this converts the value into an array 
// console.log(Array.from({
//     name :"Prajwal"
// }))    //so this from gets confused about kisko array me badalna hai keys or values

let score1 = 200
let score2 = 300
let score3 = 500

console.log(Array.of(score1, score2 , score3)); // .of converts the entered variables/set of elements (array , variables) into an array 
console.log(Array.from(score1, score2 , score3));  //this does not work , not sure why






