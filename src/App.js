import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [highest, setHighest] = useState(0);

  const firstVariable = () => {
    setFirst(first + 1);
  };

  const secondVariable = () => {
    setSecond(second + 1);
  };

  useEffect(() => {
    if (first > second) {
      setHighest(first);
    } else {
      setHighest(second);
    }

    console.log("Count variable has changed!");
  }, [first, second]);

  return (
    <div className="btns-cont">
      <div className="btns">
        <button onClick={firstVariable}>First Button</button>
        <button onClick={secondVariable}>Second Button</button>
      </div>
      <p>{highest}</p>
    </div>
  );
}

export default App;
