import React, { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const initial = () => Number(window.localStorage.getItem("state")) || 0;
  const reset =()=>{
    setstate(0);
  }

  const [state, setstate] = useState(initial);

  useEffect(() => {
    window.localStorage.setItem("state", state);
  }, [state]);

  const increment = () => {
    setstate(state + 1);
  };
  const decrement = () => {
    setstate(state - 1);
  };

  return (
    <>
      <div className="first">
        <div className="second">
          <h1>{state}</h1>
          <div className="buttons">
            <button id="plus" className="button" onClick={increment}>+</button>
            <button id="minus" className="button" onClick={decrement}>-</button>
          </div>
          <button className="reset" onClick={reset}>RESET</button>
        </div>
      </div>
    </>
  );
};

export default App;
