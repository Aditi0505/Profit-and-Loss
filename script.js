var initialPriceInput = document.querySelector("#initial-price");
var currentPriceInput = document.querySelector("#current-price");
var stocksInput = document.querySelector("#stocks");
var output = document.querySelector("#output");
var btnShow = document.querySelector("#btn-show");

btnShow.addEventListener("click", clickHandler);

function clickHandler() {
  calculateProfitAndLoss();
}

function calculateProfitAndLoss() {
  var loss = 0;
  var lossPercentage = 0;
  var profit = 0;
  var profitPercentage = 0;
  if (
    initialPriceInput.value === "" ||
    currentPriceInput.value === "" ||
    stocksInput.value === ""
  ) {
    alert("Please fill out all Fields");
  } else if (
    initialPriceInput.value < 0 ||
    currentPriceInput.value < 0 ||
    stocksInput.value < 0
  ) {
    alert("Please enter non-negative digits only");
  } else {
    if (Number(initialPriceInput.value) > Number(currentPriceInput.value)) {
      loss =
        (Number(initialPriceInput.value) - Number(currentPriceInput.value)) *
        stocksInput.value;
      lossPercentage = (loss / Number(initialPriceInput.value)) * 100;
      output.innerText =
        "Sorry! Your loss is " +
        loss +
        " and the loss percentage is " +
        lossPercentage.toFixed(2) +
        "%";
      output.style.color = " #E46B3F";
    } else if (
      Number(currentPriceInput.value) > Number(initialPriceInput.value)
    ) {
      profit =
        (Number(currentPriceInput.value) - Number(initialPriceInput.value)) *
        stocksInput.value;
      profitPercentage = (profit / Number(initialPriceInput.value)) * 100;
      output.innerText =
        "Yes! Your profit is " +
        profit +
        " and the profit percentage is " +
        profitPercentage.toFixed(2) +
        "%";
      output.style.color = " #D63964";
    } else {
      output.innerText = "No Gain No Loss";
      output.style.color = " #34D0B2";
    }
  }
}
