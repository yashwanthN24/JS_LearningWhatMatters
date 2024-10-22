let allh1s = document.querySelectorAll('h1');

console.log(allh1s)

let val = 0;
allh1s.forEach(function (h1) {
    h1.innerHTML = `All the best ${++val}`;
})


console.dir(allh1s);


// creating elements Using DOM

let button = document.createElement("button");

button.innerText = "Click Me";
button.style.color = "white";
button.style.backgroundColor = "Blue";

button.addEventListener("click", function () {
    console.log(this )
})

document.querySelector('h1').after(button);



// innerHTML : to insert html inside elements

// innerText : to insert text inside elements

// textContent : to insert text inside elements doesn't recognize html



