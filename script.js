const html = document.documentElement

function loadPreviousMode() {
  if (localStorage.getItem("pageTheme") === "light") {
    html.classList.toggle("light")
  }
}

function toggleMode() {
  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    localStorage.setItem("pageTheme", "light")
  } else {
    localStorage.setItem("pageTheme", "dark")
  }
}
