document.addEventListener("DOMContentLoaded", load);
let counter = 0;
const button_text = "Click me daddy! ";

let button = document.createElement("button");
button.innerText = button_text;
button.id = "b";
button.onclick = count;

let text = document.createElement("p");
// text.innerText = counter.toString();

function load() {
  document.body.appendChild(button);
  document.body.appendChild(text);
}

function count() {
  // let text = document.getElementById("clickmedaddy");
  let button = document.getElementById("b");
  counter++;
  text.innerText = counter;
  button.innerText = button_text + " " + counter.toString();
}
