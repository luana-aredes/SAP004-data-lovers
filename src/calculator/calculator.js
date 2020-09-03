export default async () => {
  const container = document.createElement("div");
  container.innerHTML = `
  <div id="container-calculator">
  <form class="form">
  <fieldset class="fieldset calculator-title">
    <p class="calculator-text">
      Digite a quantidade de ovos que você possui e quantos metros em média você caminha por dia. Assim você saberá
      em quantos dias conseguirá chocar todos os seus ovos.
    </p>
  </fieldset>
  <fieldset class="fieldset">
    <label for="eggs-2km"> Quantidade de ovos de 2 km </label>
    <input type="number" autocomplete="off" class="input" id="eggs-2km" placeholder="Valor" />
  </fieldset>
  <fieldset class="fieldset">
    <label for="eggs-5km"> Quantidade de ovos de 5 km </label>
    <input type="number" autocomplete="off" class="input" id="eggs-5km" placeholder="Valor" />
  </fieldset>
  <fieldset class="fieldset">
    <label for="eggs-5km"> Quantidade de ovos de 7 km </label>
    <input type="number" autocomplete="off" class="input" id="eggs-7km" placeholder="Valor" />
  </fieldset>
  <fieldset class="fieldset">
    <label for="eggs-7km"> Quantidade de ovos de 10 km </label>
    <input type="number" autocomplete="off" class="input" id="eggs-10km" placeholder="Valor" />
  </fieldset>
  <fieldset class="fieldset">
    <label for="eggs-10km"> Quantos metros em média você caminha por dia? </label>
    <input type="number" autocomplete="off" class="input" id="meters-walked" placeholder="Valor" />
  </fieldset>
  <fieldset class="fieldset">
    <button type="button" id="calculate-button" value="Calcular"> Calcular </button>
  </fieldset>
  <fieldset class="fieldset">
    <textarea rows="6" id="calculator-result" class="message"></textarea>
  </fieldset>
  <fieldset class="fieldset">
    <button type="reset" id="button-reset"> Fazer novo calculo </button>
  </fieldset>
  </form>
  </div>
  `
  const calculatorResult = container.querySelector("#calculator-result");
  const resetButton = container.querySelector("#button-reset")
  const calculateButton = container.querySelector("#calculate-button");
  container.querySelector("#calculate-button").addEventListener("click", calculoDias);
  calculatorResult.classList.add("invisible");
  resetButton.classList.add("invisible");

  function calculoDias() {
    const value2km = container.querySelector("#eggs-2km").value;
    const value5km = container.querySelector("#eggs-5km").value;
    const value7km = container.querySelector("#eggs-7km").value;
    const value10km = container.querySelector("#eggs-10km").value;
    const travelledDistance = container.querySelector("#meters-walked").value;
    const necessaryDistance = ((value2km * 2) + (value5km * 5) + (value7km * 7) + (value10km * 10)) * 1000
    const numberOfDays = (necessaryDistance / travelledDistance)
    calculatorResult.value = `Se você continuar caminhando em média ${travelledDistance} metros por dia, você conseguirá chocar seus ovos em aproximadamente ${numberOfDays.toFixed(0)} dias.`
    calculatorResult.classList.remove("invisible");
    resetButton.classList.remove("invisible");
    calculateButton.classList.remove("invisible");
  }
  return container
}
