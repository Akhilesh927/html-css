let aish=document.createElement('p');
aish.textContent="i'm chitti";
// document.getElementById("vasi").appendChild(aish);
aish.innerHTML="memory 1 tera byte";
aish.style.color="red";
document.getElementById("vasi").style.textAlign ="center";
document.getElementById("vasi").style.backgroundColor ="grey";
document.getElementById("vasi").appendChild(aish);
setTimeout(()=>{
    let red =document.getElementsByClassName("mak")[0]
    red.remove();
},677);
let newHeading =document.createElement("h2");
newHeading.innerHTML="This is a new heading added by";
newHeading.style.color="purple";
newHeading.style.fontSize="20px"
document.body.appendChild(newHeading);
setTimeout(()=>{
    let ree =document.createElement("p")
    ree.textContent="This text is added after 3 seconds";
    ree.style.color="green";
    document.body.appendChild(ree)
},3000);
let tagtext = document.createElement("p");
tagtext.textContent="This text is appended to tag!";
tagtext.style.color="orange";
document.getElementById("vasi").appendChild(tagtext);
let mylist =document.createElement("ul");
for(let i=1;i<=3;i++){
    let listitems=document.createElement("li");
    listitems.textContent="Item" + i;
    listitems.style.color="blue"
    listitems.style.fontSize="19px";
    mylist.appendChild(listitems);
    document.body.appendChild(mylist);
}