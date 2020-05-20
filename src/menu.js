const button = document.getElementById("burguer").addEventListener("click", showMenu)

function showMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle("visible")
}
