import "./styles.css";

const body = document.querySelector("body");
const h2 = document.querySelector("h2");

function resize() {
  let width = window.innerWidth;
  if (width > 900) {
    body.classList.add("large");
    if (body.classList.contains("medium")) {
      body.classList.remove("medium");
    } else if (body.classList.contains("small")) {
      body.classList.remove("small");
    }
  } else if (width < 300) {
    body.classList.add("small");
    if (body.classList.contains("medium")) {
      body.classList.remove("medium");
    } else if (body.classList.contains("large")) {
      body.classList.remove("large");
    }
  } else {
    body.classList.add("medium");
    if (body.classList.contains("large")) {
      body.classList.remove("large");
    } else if (body.classList.contains("small")) {
      body.classList.remove("small");
    }
  }
}

h2.innerText = "Hello!";
h2.style.color = "white";
window.addEventListener("resize", resize);
