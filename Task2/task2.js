// Temporal Dead Zone (TDZ) : 
// What it is?
// The Temporal Dead Zone is the time between when a let / const variable is created (hoisted) and when it’s initialized.
// During that time, the variable exists but you can’t use it — if you try, JavaScript throws a ReferenceError.


// console.log(a); // undefined
// var a = 10;

// console.log(b); // ❌ ReferenceError
// let b = 20;


// JavaScript Operators (Arithmetic, Logical, Comparison, etc. :-- 
// 1. Arithmetic 
        // -> + 	Addition
        // -> - 	Subtraction
        // -> *	    Multiplication
        // -> / 	Division
        // -> % 	Modulus (remainder)
        // -> ** 	Exponent (power)
        // -> ++ 	Increment by 1
        // -> --	Decrement by 1
        
// 2. Assignment Operators 
        // =	Assign value	
        // +=	Add and assign	
        // -=	Subtract and assign	
        // *=	Multiply and assign	
        // /=	Divide and assign	
        // %=	Modulus and assign	
        // **=	Power and assign
        
// 3. Comparison Operators 
        // ==	Equal (value only)	
        // ===	Strict equal (value + type)	
        // !=	Not equal (value only)	
        // !==	Strict not equal	
        // >	Greater than	
        // <	Less than	
        // >=	Greater or equal	
        // <=	Less or equal	

// 4. Logical Operators
        // &&	AND	
        // ||	OR		
        // !	NOT	


// Conditional Statements (if, else if, switch)

// a = 5 
// b = 6 

// if (b > a ){
//     console.log("Yes B is Greater then a")
// }
// else{
//     console.log("No B not Greater then a")
// }

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Weekend");
// }


// Functions & Its Types (Normal, Anonymous, Arrow,)

// 1. What is a function?
// A function is a reusable block of code that performs a specific task.
// You define it once, and you can run (call) it whenever you need.

// Types of functions in javascript 
// 1. Normal Function 
// 2. Function Expression
// 3. Anonymous Function
// 4. Arrow Function


// DOM & its Methods (getElementById, querySelector, etc.)


let stopButton = document.getElementById("stopButton")
let readyButton = document.getElementById("readyButton")
let goButton = document.getElementById("goButton")

let stopLight = document.getElementById("stopLight")
let readyLight = document.getElementById("readyLight")
let goLight = document.getElementById("goLight")

function stopButtonFun() {
    clearLight();
    stopButton.style.backgroundColor = "#cf1124"
    stopLight.style.backgroundColor = "#cf1124"
}

function readyButtonFun() {
    clearLight();
    readyButton.style.backgroundColor = "#f7c948"
    readyLight.style.backgroundColor = "#f7c948"
}

function goButtonFun() {
    clearLight();
    goButton.style.backgroundColor = "#199473"
    goLight.style.backgroundColor = "#199473"
}

function clearLight() {
    stopButton.style.backgroundColor = "#1f1d41"
    stopLight.style.backgroundColor = "#4b5069"

    readyButton.style.backgroundColor = "#1f1d41"
    readyLight.style.backgroundColor = "#4b5069"

    goButton.style.backgroundColor = "#1f1d41"
    goLight.style.backgroundColor = "#4b5069"
}