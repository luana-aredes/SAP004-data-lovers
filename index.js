import calculator from "./calculator/calculator.js";
import tips from "./tips/tips.js";
import home from "./home/main.js";

const main = document.querySelector('#root');

const rout = async () => {
  main.innerHTML = `
    <header>
    <section class="menu-bar invisible">
      <img src="./images/menu.png" width="50px" height="50px" class="burguer" id="burguer" />
      <h1 class="mobile-title">PokeFÃ</h1>
    </section>
    <nav class="nav" id="nav">
      <ul>
        <li class="navigation-item">
          <a href="/#"> Página Inicial </a>
        </li>
        <li class="navigation-item">
          <a href="/#tips"> Dicas do Jogo </a>
        </li>
        <li class="navigation-item">
          <a href="/#calculator"> Calculadora </a>
        </li>
      </ul>
    </nav>
    <h1 class="title">PokeFÃ</h1>
    <h2 class="subtitle"></h2>
    </header>
    `
  main.querySelector("#burguer").addEventListener("click", () => {
    main.querySelector("#nav").classList.toggle("visible")
  })

  const subtitle = main.querySelector(".subtitle");
  const title = main.querySelector(".title");


  switch (window.location.hash) {
    case " ":
      main.appendChild(await home());
      break;
    case "#calculator":
      main.appendChild(await calculator());
      subtitle.innerHTML = `Calculadora`;
      title.classList.add("invisible");
      break;
    case "#tips":
      main.appendChild(await tips());
      subtitle.innerHTML = `Dicas`
      title.classList.add("invisible");
      break;
    default:
      main.appendChild(await home());
  }

}

window.addEventListener("load", async () => {
  await rout();
});

window.addEventListener("hashchange", async () => {
  await rout()
});
