const navlinks = document.querySelectorAll(".boxes > button");

navlinks.forEach(navlinkEl => {
    navlinkEl.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        navlinkEl.classList.add("active");
    })
});


var burgers = document.getElementById("burgers");
var sides = document.getElementById("sides");
var drinks = document.getElementById("drinks");

function openBurgers() {
    burgers.style.opacity = "100";
    sides.style.opacity = "0";
    drinks.style.opacity = "0";
    burgers.style.transition = "opacity 0.5s";
}

function openSides() {
    burgers.style.opacity = "0";
    sides.style.opacity = "100";
    drinks.style.opacity = "0";
    sides.style.transition = "opacity 0.5s";

}

function openDrinks() {
    burgers.style.opacity = "0";
    sides.style.opacity = "0";
    drinks.style.opacity = "100";
    drinks.style.transition = "opacity 0.5s";

}

function goToCart() {
    window.location.href = "go-to-cart.html";
}

document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById('total');
    input.setAttribute("min", "0");
    input.setAttribute("max", "99");

});

function addToCart() {
    // Select the h6 element and input field
    let counter = document.querySelector('.increment');
    let input = document.getElementById('total');

    // Get the selected number of items
    let count = parseInt(counter.innerText, 10);
    let addedItems = parseInt(input.value, 10);

    // Ensure the input value is within valid range
    if (addedItems < 0) {
        input.value = 0;
        addedItems = 0;
    } else if (addedItems > 99) {
        input.value = 99;
        addedItems = 99;
    }

    // Calculate new count and update UI
    let newCount = count + addedItems;
    counter.innerText = newCount;

    // Store the new count in local storage
    localStorage.setItem('cartCount', newCount);
}

// Function to load cart data from local storage on page load
function loadCartData() {
    let counter = document.querySelector('.increment');

    // Retrieve cart count from local storage or default to 0
    let savedCount = parseInt(localStorage.getItem('cartCount'), 10) || 0;
    counter.innerText = savedCount;
}

// Call loadCartData when the page loads to ensure data persists
window.onload = loadCartData;




