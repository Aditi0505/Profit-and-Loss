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
  if (Number(initialPriceInput.value) > Number(currentPriceInput.value)) {
    loss =
      (Number(initialPriceInput.value) - Number(currentPriceInput.value)) *
      stocksInput.value;
    lossPercentage = (loss / Number(currentPriceInput.value)) * 100;
    output.innerText =
      "Sorry! Your loss is " +
      loss +
      " and the loss percentage is " +
      lossPercentage +
      "%";
  } else if (
    Number(currentPriceInput.value) > Number(initialPriceInput.value)
  ) {
    profit =
      (Number(currentPriceInput.value) - Number(initialPriceInput.value)) *
      stocksInput.value;
    profitPercentage = (profit / Number(currentPriceInput.value)) * 100;
    output.innerText =
      "Yes! Your profit is " +
      profit +
      " and the profit percentage is " +
      profitPercentage +
      "%";
  } else {
    output.innerText = "No Gain No Loss";
  }
}
