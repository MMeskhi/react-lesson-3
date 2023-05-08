import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("Count variable has changed!");
  }, [first, second]);

  const firstVariable = () => {
    setFirst(first + 1);
  };

  const secondVariable = () => {
    setSecond(second + 1);
  };

  let output = "";
  if (first > second) {
    output = `First: ${first}`;
  } else if (second > first) {
    output = `Second: ${second}`;
  }

  return (
    <div className="btns-cont">
      <div className="btns">
        <button onClick={firstVariable}>First Button</button>
        <button onClick={secondVariable}>Second Button</button>
      </div>
      <p>{output}</p>
    </div>
  );
}

export default App;
