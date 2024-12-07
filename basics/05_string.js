const name = "Prajwal";

const repoCount = 50;

console.log(`Hello my name is ${name} amd my repo count is ${repoCount}`);

const gameName = new String("Prajwal Jha");  //add this into browser and then read all those functions and stuff that string provides

console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf(0));

const newString = gameName.substring(0 , 5)
console.log(newString);


const newStringOne = "   prajwal  "
console.log(newStringOne.trim());  //removes the extra spaces from start and end


const url = "https://prajwal.com//prajwal%20jha"

console.log(url.replace('%20' , '-')) //read this as well on mdn replace mdn


console.log(gameName.split(' ')); //this splits every letter into an array and separator ' ' this separates on the basis of spaces