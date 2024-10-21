// understanding var and let difference

// 1st difference var is old way to declare variables in JS i.e ES5 whereas
//     let is newer and preffered way to declare variables in modern JS ES6

// 2nd difference

/*  
    var has Function scope meaning its variables can be used anywhere in its  parent function/ globally 

    let has Braces scope or Block scope {} meaning it can be used only with that {}  in which its 
    defined 

*/


function abcd() {
    for (var i = 1; i <= 5; i++){
        console.log(i);
    }

    console.log("Outside loop")

    console.log(i); // var means still accessible 
}
function abcd2() {
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }

    console.log("Outside loop")

    // console.log(i);
    // now i not accessible because i had block scope only with that for loop
}


abcd();

abcd2();

// 3rd Difference

/*

var adds itself to window object thereby exposing the variable to the browsers console

let does add itself to window object 

*/


// Understanding Window object

/*

-In JS we have a lot of features that are not part of JS but still can be used in JS 

-This features are provided by the window which is basically a box of extra features given to JS by the browser 

-Window object is provided by the Browser for JS to use it 

-We see that we have used alert , prompt , console in JS all these are not part of JS they are part of Window 
Object 

To Believe me Go to any browser inspect => console => type window and enter 
u will find that alert is one of the methods of window 

Try it Out !!!


*/


var a = 17;

// Now go to console and type window and you will find that the declared variable gets added
// as a property to the window thereby exposing the actual value to the browser

// Thus we shld avoid using var and start using let instead




let b = 19; 

// This wont add to the window object hence a better option






/* Summery : Use let and const only in JS , Avoid Using var as possible */


// Also see that in nodejs Window object features wont work as they are part of browser not js

// Node js only executes pure JS features only

// Thats why alert prompt wont work in Node.js as they are features of browser (window object ) not the JS language


