//object has a name otherwise it will be treated as json

const JsUser = {
    "fullname" : "Prajwal jha" ,   //the name is processed as "name" string
    age : 18,
    location : "Delhi",
    lastLoggedIn : ['Monday', 'sunday']
}

console.log(JsUser["fullname"]);


JsUser.greeting = function (){
    console.log(`Hello js user ${this.fullname}`)   //here this gives the refrence of jsUser
}


console.log(JsUser.greeting)   //this greeting just gives us the function refrence and it is not executed
console.log(JsUser.greeting())    //this adding ()  executes the method as well .. method means teh functions defined inside a object


//second way of declarind the object which we call non singleton 

// const tinderUser = new Object()   //THIS IS NON SINGLETON OBJECT

const tinderUser = {}

tinderUser.id = "34728397"
tinderUser.name = "samm";

tinderUser.isLoggedIn = false;
const regularUser = {
    email :"some@gmail.com",
    fullname : {
        userFullName: {
            firstName : "Prajwal",
            lastName : "Jha"
        }
    }
}

console.log(regularUser.fullname?.userFullName.lastName);  //chaining and also adding extra thing ? which check if fullname exists 

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

const obj3 = Object.assign({} , obj1 , obj2)    // .assign adds objects taking a object in which i have to copy to and then all objects mentioned are the sources 
const obj4 = {...obj1 , ...obj2} //this is the modern syntax of spreading values and then adding each as individual which we did in the arrays exactly.
console.log(obj4);


const users = [
    {
        id: "38475298375928579"
    },
    {
        id: "98793475929234957"
    }
]

console.log(users[1].id)

console.log(Object.keys(tinderUser)); //prints all the keys of the user into an array and then we can add any iterations to do any manipulations
console.log(Object.values(tinderUser)); //this prints the values 
console.log(Object.entries(tinderUser)); //this prints both , this does not come in usecase very often 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //this checks whether this property or not



//destructuring 
const course = {
    courseName : "js learning course",
    price : "888",
    instructor : "prajwal"
}

const { instructor : teacher} = course;   //otherwise we will have to write all these course.instructor again and again
console.log(teacher); // we destructured instructor and named it as a teacher