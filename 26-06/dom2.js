document.title="DOM in javascript";
document.getElementById("header").innerHTML="MRCET"
document.getElementById("para").style.color="red";
document.getElementById("para").style.fontsize="30px";
document.getElementById("header").style.color="red";
document.getElementsByClassName("ds")[0].style.color="red";
document.body.style.backgroundColor="white";
document.getElementsByTagName("p")[2].style.color="red";
document.getElementsByClassName("ds")[1].style.color="red";
document.getElementsByTagName("h1")[0].style.backgroundColor="pink";
let mak=document.getElementsByClassName("hey");
 mak[0].style.color="red";
mak[1].style.color="green";
mak[2].style.color="orange";
document.querySelector(".hey").style.color="green"
let e=document.querySelectorAll(".h")
e[0].style.color="red";
e[1].style.color="blue";
e[2].style.color="orange";
// function change(){
//     document.body.style.backgroundColor="silver"
//     alert("the background color will be changed")
// }
// function change(){
//     if (document.body.style.backgroundColor==="white"){
//         document.body.style.backgroundColor="red"
//     }
//     else if (document.body.style.backgroundColor==="red"){
//         document.body.style.backgroundColor="green"
//     }
//     else{
//         document.body.style.backgroundColor="white"
//     }
// }
function change(){
     document.body.style.backgroundColor==="white"? document.body.style.backgroundColor="silver": document.body.style.backgroundColor="white"
}
function changee(){
      document.getElementById("hi").innerHTML="hi";
      document.getElementById("hi").style.backgroundColor="red";
}