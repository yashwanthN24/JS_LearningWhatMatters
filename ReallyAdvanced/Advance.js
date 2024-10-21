// Constructor Function 


function circularButton(color) {
    this.radius = 2 ; 
    this.color = color ; 
    this.icon = false ;
    this.pressable = true ;
}


var redbtn = new circularButton("red");
var greenbtn = new circularButton("green");

console.log(redbtn);
console.log(greenbtn);


// IIFE - Immediately Invoked Function Expression

var ans = (function () {
    var privatevar = 13;

    return {
        getter: function () {
            console.log(privatevar);
        },

        setter: function (val) {
            privatevar = val;
        }
    }
})();


ans.setter(12);

ans.getter();


var myobj = {
    age: 12
};


// Prototype Inheritance

var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    haveFourLegs: false
};

var shreyiansStudent = {
    canMakeAmazingWebsite: true,
    canMakeAwesomeAnimations: true,
    canMakeWorldClassAwwardedWebsites: true
};


// Now shreyiansStudent inherits/borrows all the features of human 

shreyiansStudent.__proto__ = human;



// this keyword  in Event Listeners 

// var button = document.querySelector("button");

// button.addEventListener("click", function () {
//     console.log(this);
//     this.style.backgroundColor = "yellow";
// });

// call apply bind

// To make this to point to something else apart from its default behaviour

function abcd(a , b , c ) {
    console.log(this , a , b , c); // now this is window here

    // but what if i want this to be something else can do this using call method
}

// abcd();
// Insteading of calling normally call this way

var obje = {
    age: 18
}

abcd.call(obje , 12 , 13 , 14); //now this refers to obje object that was passed to call() method

// Apply also same but extra arguments apart from this are passed in an array so
// only two arguments 1st for this 2nd array of remaining argument s

abcd.apply(obje, [12, 56, 78]); 




var bindedFunc = abcd.bind(obje, 78, 100, 102); // bind actually binds and gives u a new function to store in variable

// Now run the bindedFunc using bindedFunc()

bindedFunc();



/*

Use Case : When you want have a function in which this has to refer to someother object defined by you 

Use call() , apply() and bind() in such cases 


*/
