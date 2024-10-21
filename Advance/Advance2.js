// How to copy references

var a = [1, 2, 3, 4, 5];
var b = a;
b.pop();

console.log(a);
console.log(b);


var a1 = [1, 2, 3, 4, 5];
var b1 = [...a1]; // creates an array with copy of a1 values using spread operator ... 
// Now a1 and b1 are two different arrays 
b1.pop();

console.log(a1);
console.log(b1);

// Similarly for objects as well

var obj = { name: "yash" };
var newObj = { ...obj };

newObj.name = "Yashas";
console.log(obj);
console.log(newObj);

var n1 = [1, 2, 3, 4, 5];

n1.forEach(function (val) {
    val = val + 2;

})

console.log(n1);


// forin  to loop over array indexed or objects keys

var obj = {
    name: "harsh",
    age: 24,
    city: "bhopal"

};

for (var key in obj) {
    console.log(key," : ", obj[key]);
}


var a2 = 12; 

do {
    console.log("hey");
    a2++;
} while (a2 < 15);


// What is CallBack Function

// That code which runs later will be placed in a function when the wait completes this function runs
// This function is just like a normal function which gets passed to other function

// This is part of Asynchronous JS !!!!

// Ex:


setTimeout(function () {
    console.log("printing after 2's")
}, 2000);



// First class Functions or Function expressions

// In JS we can treat functions as a value and can be stored in a variable

// EX:

function abcd(a) {
    a();
}

abcd(function () {
    console.log("hello");
})


// How arrays are made behind the scene

var arr = [1, 2, 3, 4];
console.log(typeof arr); // we see that array is an object

// Because convert arr into

arr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
};

arr[-1] = 2;

console.log(arr);


console.log(Array.isArray([1, 2, -1]));
console.log(Array.isArray({}));


// Deleting object properties

var object = {
    name: "rocky",
    age: 24
};

delete object.age;
delete object.name;

console.log(object);