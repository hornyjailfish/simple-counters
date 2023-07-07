import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  let counter = 0;
  const button_text = "clickmedaddy! ";
  function count() {
    let p = document.getElementById("text");
    let b = document.getElementById("butt");
    counter++;
    p.innerText = counter.toString();
    b.innerText = button_text + " " + counter.toString();
  }
  return (
    <div class={styles.App}>
      <h1>Solid</h1>
      <div class={styles.content}>
        <button class={styles.button} id="butt" onclick={count}>
          {button_text}
        </button>
        <p class={styles.p} id="text"></p>
      </div>
    </div>
  );
}

export default App;
