const button = document.querySelector(".btn");
const result = document.querySelector(".display-result");
let startTemp = document.querySelector(".form-select-start");
let endTemp = document.querySelector(".form-select-end");

button.addEventListener("click", e => {
    let amount = document.querySelector("#amount").value;
    let selectedStartTemp = startTemp.value;
    let selectedEndTemp = endTemp.value;

    let temp;
    let convertedTemp;

    if (selectedStartTemp == selectedEndTemp) {
        result.innerText = "Please select different temperatures";
        return;
    }
    
    if (selectedStartTemp == 'C'){
        temp = amount / 5;
    }
    else if (selectedStartTemp == 'R'){
        temp = amount / 4;
    }
    else if (selectedStartTemp == 'F'){
        temp = (amount - 32) / 9;
    }
    else if (selectedStartTemp == 'K'){
        temp = (amount - 273) / 5;
    }

    if (selectedEndTemp == 'C'){
        convertedTemp = temp * 5;
    }
    else if (selectedEndTemp == 'R'){
        convertedTemp = temp * 4;
    }
    else if (selectedEndTemp == 'F'){
        convertedTemp = (temp * 9) + 32;
    }
    else if (selectedEndTemp == 'K'){
        convertedTemp = (temp * 5) + 273;
    }

    e.preventDefault();

    console.log(convertedTemp);
    result.innerHTML = amount + " " + selectedStartTemp + " = " + convertedTemp + " " + selectedEndTemp;
});