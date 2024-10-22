// // Let and const 

// let a =  10 ;
// console.log(a);

// a = 89;
// console.log(a);


// const b = 90;
// console.log(b);
// // b = 11;
//  // error constant can be changed 
// console.log(b);

// /*

// let and const both are used to store values  but both behave differently 
// variables declared using let there values can be changed but for const the value cannot be chnaged once assigned 
// Its not compulsory to intilize the variable with a value for let 
// Its Compulsory to provide a value during declaration for const 

// */


// let b1 ; // no error 

// // const a3; 
// // error Missing intializer in const declaration 

// /*

//  let and const both are different , let is used to create variables and const is used to create 
//  constants

//  let and const are similiar in few things 
//  - let and const boh belong to ES6 Modern Javascript 
//  - let and const both wont add themselved to the window object 
//  - let and const both have block scope i.e accessible only within { } unlike var having functioned scope 

//  Ex:

// */


// {
//     let age  = 67;
// }

// // console.log(age); 
// // error as age is only available in that block 

// {
//     var name = "raj";
// }

// console.log(name);

// {
//     const Married  = false ;
// }

// console.log(Married);



// Arrow Function

// 1 Basic fat Arrow  Function 

var a = () => {
    console.log("Hello world");
}
a();

// 2 fat Arrow Function wth one parameter

var b1  = (param) =>{
    console.log(`You Passed ${param}`);
}

// When one param there u can drop those () 

var b2 = param => {
    console.log(param);
}
b2("Its time To sleep");

b1("Good Night!!");

// 3 fat Arrow Function implicit Return 

var g = () => 122;

console.log(g());
