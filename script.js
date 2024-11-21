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

function revelationsIndex() {
  ScrollReveal().reveal("#textoComeco h2", {
    delay: 100,
    origin: "bottom",
    distance: "50px",
    easing: "ease-out",
    duration: 500,
  })
  ScrollReveal().reveal("#textoComeco h1", {
    delay: 150,
    origin: "bottom",
    distance: "50px",
    easing: "ease-out",
    duration: 500,
  })
  ScrollReveal().reveal("#textoComeco a", {
    delay: 200,
    origin: "bottom",
    distance: "50px",
    easing: "ease-out",
    duration: 500,
  })
  ScrollReveal().reveal("#tituloSobre h1", {
    delay: 200,
    origin: "left",
    distance: "25px",
    easing: "ease-out",
    duration: 500,
    reset: true,
  })
  ScrollReveal().reveal("#tituloSobre img", {
    delay: 250,
    origin: "left",
    distance: "25px",
    easing: "ease-out",
    duration: 500,
    reset: true,
  })
  ScrollReveal().reveal("#textoSobre h2", {
    delay: 300,
    origin: "right",
    distance: "50px",
    easing: "ease-out",
    duration: 250,
    reset: true,
  })
  ScrollReveal().reveal("#sobre1", {
    delay: 325,
    origin: "right",
    distance: "50px",
    easing: "ease-out",
    duration: 250,
    reset: true,
  })
  ScrollReveal().reveal("#sobre2", {
    delay: 350,
    origin: "right",
    distance: "50px",
    easing: "ease-out",
    duration: 250,
    reset: true,
  })
}

function revelationsTrajetoria() {

}

function revelationsCompetencias() {

}

function revelationsInclude() {

}

function revelationsContato() {
  
}