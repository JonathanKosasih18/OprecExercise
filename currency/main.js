const button = document.querySelector(".btn");
const result = document.querySelector(".display-result");
let startCur = document.querySelector(".form-select-start");
let endCur = document.querySelector(".form-select-end");

const API_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";

button.addEventListener("click", e => {
    let amount = document.querySelector("#amount").value;
    let selectedStartCur = startCur.value;
    let selectedEndCur = endCur.value;

    if (selectedStartCur == selectedEndCur) {
        result.innerText = "Please select different currencies";
        return;
    }
    e.preventDefault();

    let url = API_URL + selectedStartCur + '.json';
    fetch(url).then(response => response.json()).then(data => {
        let exchangeRate = data[selectedStartCur][selectedEndCur];
        let exchangeResult = (amount * exchangeRate).toFixed(2);
        console.log(exchangeResult);
        result.innerHTML = amount + " " + selectedStartCur.toUpperCase() + " = " + exchangeResult + " " + selectedEndCur.toUpperCase();
    })
})