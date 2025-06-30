let a = document.createElement("fieldset");
a.innerHTML = "Enter Your Name : ";
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter Your Name....";
a.appendChild(input);
document.getElementById("hey").appendChild(a);

let roll = document.createElement("fieldset");
roll.innerHTML = "Enter your  roolno: ";
let rollInput = document.createElement("input");
rollInput.type = "tel";
rollInput.placeholder = "Enter Your roll number....";
roll.appendChild(rollInput)
document.getElementById("hey").appendChild(roll);


let emailFieldset = document.createElement("fieldset");
emailFieldset.innerHTML = "Enter Your Email: ";
let emailInput = document.createElement("input");
emailInput.type = "roll";
emailInput.placeholder = "Enter Your Email....";
emailFieldset.appendChild(emailInput)
document.getElementById("hey").appendChild(emailFieldset);

let b = document.createElement("fieldset");
b.innerHTML = "Enter your number: ";
let pInput = document.createElement("input");
pInput.type = "tel";
pInput.placeholder = "Enter Your contact number....";
b.appendChild(pInput)
document.getElementById("hey").appendChild(b);


let grade= document.createElement("fieldset");
grade.innerHTML = "Enter your percentage: ";
let gradeInput = document.createElement("input");
gradeInput.type = "tel";
gradeInput.placeholder = "Enter Your percentage....";
grade.appendChild(gradeInput)
document.getElementById("hey").appendChild(grade);

let button =document.createElement("button")
button.textContent="submit"

 
document.getElementById("hey").appendChild(button)