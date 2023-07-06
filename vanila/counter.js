document.addEventListener('DOMContentLoaded',load);
let counter = 0;
let button_text;
function load(){
  let button = document.getElementById('addone');
  button.onclick = count;
  button_text = button.innerText;

}
function count(a) {
  let text = document.getElementById('clickmedaddy');
  text.innerText = ++counter;
  let button = document.getElementById('addone');
  button.innerText = button_text +' '+ counter.toString();
  
}
