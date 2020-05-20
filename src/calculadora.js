const calculatorResult = document.getElementById("calculator-result");
const resetButton = document.getElementById("button-reset")
const calculateButton = document.getElementById("calculate-button");
document.getElementById("calculate-button").addEventListener("click", calculoDias);
calculatorResult.classList.add("invisible");
resetButton.classList.add("invisible");

function calculoDias() {
  const value2km = document.getElementById("eggs-2km").value;
  const value5km = document.getElementById("eggs-5km").value;
  const value7km = document.getElementById("eggs-7km").value;
  const value10km = document.getElementById("eggs-10km").value;
  const travelledDistance = document.getElementById("meters-walked").value;
  const necessaryDistance = ((value2km * 2) + (value5km * 5) + (value7km * 7) + (value10km * 10)) * 1000
  const numberOfDays = (necessaryDistance / travelledDistance)
  calculatorResult.value = `Se você continuar caminhando em média ${travelledDistance} metros por dia, você conseguirá chocar seus ovos em aproximadamente ${numberOfDays.toFixed(0)} dias.`
  calculatorResult.classList.remove("invisible");
  resetButton.classList.remove("invisible");
  calculateButton.classList.remove("invisible");
}
