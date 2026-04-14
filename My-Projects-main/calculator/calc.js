


let keys = document.querySelectorAll(".keyboard>div");
let bag = "";


for(let i=0; i<keys.length; i++){
    keys[i].addEventListener("click", myCalculator);
}

function myCalculator(){
    let targetNumber = event.target.innerText;

    if(targetNumber == "AC"){
        bag = "";
        document.querySelector(".display").innerText = "";
    }
    else if(targetNumber == "="){
        document.querySelector(".display").innerText = eval(bag);
    }
    else{
        bag = bag + targetNumber;
        document.querySelector(".display").innerText = bag;
    }
}