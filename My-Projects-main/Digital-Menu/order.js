document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById('total');
    input.setAttribute("min", "0");
});

function addToCart() {
    // Select the h6 element and input field
    let counter = document.querySelector('.increment');
    let input = document.getElementById('total');
    // Get the selected number of items
    let count = parseInt(counter.innerText, 10);
    let addedItems = parseInt(input.value, 10);
    // Ensure the input value is not less than 0
    if (addedItems < 0) {
        input.value = 0;
        addedItems = 0;
    }
    // Update the h6 element with the new count
    counter.innerText = count + addedItems;
}