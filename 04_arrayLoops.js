const arr = [1 ,2,3,4 ,5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello prajwal";

for (const i of greetings) {    // usecase of "for of" loop
    console.log(`Each char is ${i}`);
}

const map = new Map();

map.set('IN' , "India")
map.set('USA' , "United states of America")
map.set('Fr' , "France")


// //using forEach
// const coding = ["js", "ruby" , "java" , "c++"];

// coding.forEach((item) =>{
//     console.log(item);
// })

// const myCoding = [{
//     languageName : "java",
//     shortcut : "java"
// },
// {
//     languageName : 'javascript',
//     shortcut : 'js'
// },
// {
//     languageName : 'python',
//     shortcut : 'py'
// }
// ]

// myCoding.forEach( (item)=>{
//     console.log(item.shortcut);
// })

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (num) => num >4);

console.log(newNums);

const newNums2 = myNums
.map((num) => num *10)
.map((num) => num +1)
.filter((num) => num >= 51)
console.log(newNums2);


//reduce js mdn study by yourself

const myNums3 = [1,2,3,4]

const myTotal = myNums3.reduce(function (acc , currval) {
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
} , 0)

console.log(myTotal);