import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  count = count > 0 ? count : "";
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click me daddy! {count}
        </button>
        <p>{count}</p>
      </div>
    </>
  );
}

export default App;
