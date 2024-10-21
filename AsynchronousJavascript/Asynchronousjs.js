// console.log("hey ");
// console.log("hey 1");
// console.log("hey 2");
// console.log("hey 3");


// Above code is synchronous so order of execution is hey hey1 hey2 hey3



// setTimeout(callback , timeinms) ; // callback is just a function , timeinms ex: 5000 meaning 5s

// callback functions always run only after recieving the answer/response  of the async (asynchronous) code


// console.log("hey");
// setTimeout(function () {
//     console.log("hey3")
// } , 2000)
// console.log("hey2");




// console.log("hey");
// console.log("hey1");
// setTimeout(function(){
//     console.log("Hey2");
// }  , 0);
// console.log("hey3");


//promises : Mainly used for API calling

// var ans = new Promise((res , rej)=>{
//     var n = Math.floor(Math.random() * 10);
//     console.log(n);
//     if(n < 5){
//         res();
//     }else{
//         rej();
//     }
// });


// ans
//   .then(()=>{
//     console.log("Below 5");
//    })
//    .catch(()=>{
//     console.log("Above 5");
//    })

// Promise chaining to Perform a set of asynchronous tasks one after the other

// var answer = new Promise(function (res, rej) {
//     return res("Wake up early in morning")
// });

// var newAns = answer.then(function (data) {
//     console.log(data);
//     return new Promise(function (res, rej) {
//         return res("Start coding")
//     })
// })

// newAns.then(function (data) {
//     console.log(data);
// });


// Same thing in other way

var answer = new Promise(function (res, rej) {
    return res("Wake up early in morning")
});

answer
    .then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("Start coding")
    })
})
.then(function (data) {
    console.log(data);
})


// API using Async Await

// Before using async await lets try the native way without async await


// function apicall() {
    
//     fetch('https://randomuser.me/api/')
//         .then(function (raw) {
//         return raw.json()
//         }).then(function (data) {
//             console.log(data)
//     })

// }


// To convert above code to async await 

async function apicall() {
    
    let raw = await fetch('https://randomuser.me/api/')
    let ans = await raw.json();
    console.log(ans);

}

apicall();




// whenever we use async code we have to wait for it because we dont know when we will
// get response for an async operation so we use await to say wait for this async operation



