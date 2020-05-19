const resultadoCalculadora = document.getElementById("calculator-result");
const buttonReset = document.getElementById("button-reset")
const buttonCalcular = document.getElementById("calculate-button");
document.getElementById("calculate-button").addEventListener("click", calculoDias);
resultadoCalculadora.classList.add("invisible");
buttonReset.classList.add("invisible");

function calculoDias() {
  const value2km = document.getElementById("eggs-2km").value;
  const value5km = document.getElementById("eggs-5km").value;
  const value7km = document.getElementById("eggs-7km").value;
  const value10km = document.getElementById("eggs-10km").value;
  const metrosPorDia = document.getElementById("meters-walked").value;
  const quilometragemTotal = ((value2km * 2) + (value5km * 5) + (value7km * 7) + (value10km * 10)) * 1000
  const quantidadeDias = (quilometragemTotal / metrosPorDia)
  resultadoCalculadora.value = `Se você continuar caminhando em média ${metrosPorDia} metros por dia, você conseguirá chocar seus ovos em aproximadamente ${quantidadeDias.toFixed(0)} dias.`
  resultadoCalculadora.classList.remove("invisible");
  buttonReset.classList.remove("invisible");
  buttonCalcular.classList.remove("invisible");
}
