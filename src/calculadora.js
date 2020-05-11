let resultadoCalculadora = document.getElementById("resultado-calculadora");
document.getElementById("button").addEventListener("click", calculoDias);


function calculoDias() {
  const value2km = document.getElementById("quantidade-2km").value;
  const value5km = document.getElementById("quantidade-5km").value;
  const value7km = document.getElementById("quantidade-7km").value;
  const value10km = document.getElementById("quantidade-10km").value;
  const metrosPorDia = document.getElementById("metros-por-dia").value;
  const quilometragemTotal = ((value2km * 2) + (value5km * 5) + (value7km * 7) + (value10km * 10)) * 1000
  const quantidadeDias = (quilometragemTotal / metrosPorDia)
  resultadoCalculadora.value = `Se você continuar caminhando em média ${metrosPorDia} por dia, você conseguiŕa chocar seus ovos em aproximadamente ${quantidadeDias.toFixed(0)} dias.`

}
