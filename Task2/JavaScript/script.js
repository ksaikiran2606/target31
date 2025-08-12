let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let total  = document.getElementById("total") ; 
let emptyMsg = document.getElementById("emptyMsg");

let addButton = document.getElementById("addButton");
let resetButton = document.getElementById("resetButton"); 

addButton.onclick = () => {
    if (numOne.value === "" || numTwo.value === "") {
        emptyMsg.textContent = "Enter a number";
    } 
    else {
        let num1 = parseInt(numOne.value);
        let num2 = parseInt(numTwo.value);
        let t = num1 + num2;
        total.value = t;
    }
};

resetButton.onclick = () =>{
    numOne.value = ""
    numTwo.value = ""
    total.value = ""
}
