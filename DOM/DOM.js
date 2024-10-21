
// Selecting an HTML element 

var a = document.querySelector("h1");
console.log(a);


// Changing HTML 

a.innerHTML = "Yash"

// Changing CSS

a.style.color = "red";

a.style.backgroundColor = "black";


// Adding Event Listeners

a.addEventListener("click", function () {
    console.log("hey");
    this.style.color = "white";
    this.style.backgroundColor = "blue";
    this.innerHTML = "yash os very good ";
})
