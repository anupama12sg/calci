"use client";

import React, { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DE") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={input} readOnly />
          </div>
          <div className="buttons">
            <input type="button" value="AC" onClick={() => handleClick("AC")} />
            <input type="button" value="DE" onClick={() => handleClick("DE")} />
            <input type="button" value="." onClick={() => handleClick(".")} />
            <input type="button" value="/" onClick={() => handleClick("/")} />
          </div>
          <div>
            <input type="button" value="7" onClick={() => handleClick("7")} />
            <input type="button" value="8" onClick={() => handleClick("8")} />
            <input type="button" value="9" onClick={() => handleClick("9")} />
            <input type="button" value="*" onClick={() => handleClick("*")} />
          </div>
          <div>
            <input type="button" value="4" onClick={() => handleClick("4")} />
            <input type="button" value="5" onClick={() => handleClick("5")} />
            <input type="button" value="6" onClick={() => handleClick("6")} />
            <input type="button" value="+" onClick={() => handleClick("+")} />
          </div>
          <div>
            <input type="button" value="1" onClick={() => handleClick("1")} />
            <input type="button" value="2" onClick={() => handleClick("2")} />
            <input type="button" value="3" onClick={() => handleClick("3")} />
            <input type="button" value="-" onClick={() => handleClick("-")} />
          </div>
          <div>
            <input type="button" value="00" onClick={() => handleClick("00")} />
            <input type="button" value="0" onClick={() => handleClick("0")} />
            <input type="button" value="=" onClick={() => handleClick("=")} className="equal" />
          </div>
        </form>
      </div>
    </div>
  );
}
