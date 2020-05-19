const botao = document.getElementById("burguer").addEventListener("click", mostrarMenu)

function mostrarMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle("visible")
}
