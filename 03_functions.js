function sayMyName (){
    console.log("Prajwal jha")
}

sayMyName();


function addTwoNumbers(num1 , num2){
    return num1 + num2;
}

console.log(addTwoNumbers(5, 6));


function logInUserMessage(username = "sam"){   //just if user does not pass any value so it will by default taken as sam
    if(username === undefined){
        console.log("Please enter a usnername");
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage());

function calculateCartPrice(...num1){    //now this takes whole argument as a input because initially we did not know how many values will the user enter
    return num1;    // ... this is known as spread or rest operator here we used rest , it depends on the usecase
} //so it bundles the whole arguments and gives us as an array

console.log(calculateCartPrice(200, 300 , 400));


//nested functions 

function one(){
    const username = "prajwal";

    function two (){
        const website = "youtube";
        console.log(username);
    }

    two();

}
one();

//++++++++++++++++++++++++++ IMPORTANT ++++++++++++++++++++++++++++++

/* so we can create functions by traditional way like function name (){}
or by this way as well const name = funcion (){} and while calling both of these we do the same if they 
except a parameter then it will be called as name(4) but but in this traditional functional call we can
call the name (5) even before the functiona is declared and that would run smoothly but in the second 
case where we holdind the function into a variable we cant call the function like name(4) before the declaration 
it will give a error saying the variable is not declared which is obvious */



// ARROW FUNCTION 

// const user = {
//     username : "Prajwal",
//     price : 798,

//     welcomeMessage : function (){
//         console.log(`${this.username} , welcome to the website`);
//         console.log(this);   //this will print the context
//     }
// }

// user.welcomeMessage();
// user.username = "rishu"
// user.welcomeMessage();  //context changed to the rishu

const addTwo = (num1 , num2 ) => num1 + num2   //implicit return 
const addTwo2 = (num1 , num2 ) =>{
    return num1 + num2   //implicit return 
}

//while returning a object 

const returnObj = (username)=> ({username : "prajwal"})   //so we need extra bracs to wrap the object
