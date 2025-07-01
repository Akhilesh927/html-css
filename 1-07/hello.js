// console.log("hello ");
// function sayHello(){
//     console.log("good morning")
// }
// // sayHello();



// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hello world")

// },5000);
// console.log("three")
// console.log("four")



// function sum (a,b){
//     console.log(a+b)
// }
// function calci(a,b,h){
//     h(a,b)
// }
// calci(2,3,sum)

 

// console.log("one")
// console.log("two")
// let hello =()=>{
//     console.log("hello")
// }
// setTimeout(hello,5000)
// console.log("three")
// console.log("four")


// for (let i=0;i<5;i++){
//     let str ="";
//     for (let j=0;j<5;j++){
//         str +=j;
//     }
//     console.log(i,str)
// }



// function getData(dataaid){
//     setTimeout(()=>{
//         console.log("fetching data for id :",dataaid);
//     },3000)
// }
// getData(1)
// getData(2)
// getData(3)


//  function getData(dataid,getnextdata){
//     setTimeout(()=>
//     {
//         console.log("Fetching data for id:",dataid);
// if (getnextdata){
//     getnextdata();
// }
//     },1000)
//  }


//  getData(1,()=>
// {
//     console.log("gettind data 2...")
//     getData(2,() => {
//         console.log("getting data 3...")
//         getData(3)
//     })
// })


// promise Syntax 
// const mypromise = new promise 
// ((resolve ,reject )=> {..})
// resolve is called when the asynchronous operation is successful 
// reject is called whne the asychronous operation fails


// const myPromise =new Promise((resolve)=> {
//     setTimeout (()=>{
//         const success =true;
//         if (success){
//             resolve ("Data fetched successfully ");
//         }else {
//             reject ("error fetching data")
//         }
//     })
// })
// myPromise 
//          .then((data)=>{
//             console.log("promise resolved with data :",data)
//          })
//          .catch((error)=>{
//             console.error("promise rejected withe error :",error)
//          })




        //  using the promise 
        //  the then() method is called when the promise is resolved successful
        //  the catch metod is called wehn the promise is rejected with an error 
        //  the finally method is called when the promise si settled regardless of whether it was resolved or rejected


// let promise = new Promise((resolve,reject)=>
// {
//     console.log("iam a promise ");
//     if (i<0){
//         resolve(123);
//     }
//     reject("something went wrong");
// })



// promise status 
// pening :initital state


function getData(dataid){
    return new Promise ((resolve,reject )=>{
        setTimeout(()=>{
            console.log("fetching data for id :",dataid);
            resolve("success");
        },20)
    })
}
let result =getData(123);
result;



getData(101)
      .then(result => {
        console.log("first fetch ;", result);
        return getData(102);
      })
      .then(result => {
        console.log("second fetch :",result)
        return getData(103);
      })