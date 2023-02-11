import React, { useState } from "react";

function Calculator() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    const btnValue = e.target.getAttribute("data-value");
    btnValue !== "=" && setInput(input + btnValue);
    if (
      btnValue === "+" ||
      btnValue === "-" ||
      btnValue === "*" ||
      btnValue === "/"
    ) {
      setOperation(btnValue);
    } else if (btnValue === "=") {
      if (value1 === "" || value2 === "" || operation === "") {
        setError("Invalid input. Please enter two numbers and an operation");
      } else {
        switch (operation) {
          case "+":
            setResult(parseFloat(value1) + parseFloat(value2));
            break;
          case "-":
            setResult(parseFloat(value1) - parseFloat(value2));
            break;
          case "*":
            setResult(parseFloat(value1) * parseFloat(value2));
            break;
          case "/":
            if (value2 === "0") {
              setError("Cannot divide by zero");
            } else {
              setResult(parseFloat(value1) / parseFloat(value2));
            }
            break;
          default:
            setError("Invalid operation");
        }
      }
    } else {
      if (operation === "") {
        setValue1(value1 + btnValue);
      } else {
        setValue2(value2 + btnValue);
      }
    }
  };

  const clear = () => {
    setValue1("");
    setValue2("");
    setOperation("");
    setInput("");
    setResult(0);
    setError("");
  };

  return (
    <div className="calculator">
      <div className="result">
        <span>{error === "" ? result : <p className="error">{error}</p>}</span>
      </div>
      <div className="calculator-display">
        <p>{input}</p>
      </div>
      <div className="calculator-keypad">
        <button className="calculator-key" data-value="1" onClick={handleClick}>
          1
        </button>
        <button className="calculator-key" data-value="2" onClick={handleClick}>
          2
        </button>
        <button className="calculator-key" data-value="3" onClick={handleClick}>
          3
        </button>
        <button
          className="calculator-key operator"
          data-value="+"
          onClick={handleClick}
        >
          +
        </button>
        <button className="calculator-key" data-value="4" onClick={handleClick}>
          4
        </button>
        <button className="calculator-key" data-value="5" onClick={handleClick}>
          5
        </button>
        <button className="calculator-key" data-value="6" onClick={handleClick}>
          6
        </button>
        <button
          className="calculator-key operator"
          data-value="-"
          onClick={handleClick}
        >
          -
        </button>
        <button className="calculator-key" data-value="7" onClick={handleClick}>
          7
        </button>
        <button className="calculator-key" data-value="8" onClick={handleClick}>
          8
        </button>
        <button className="calculator-key" data-value="9" onClick={handleClick}>
          9
        </button>
        <button
          className="calculator-key operator"
          data-value="*"
          onClick={handleClick}
        >
          x
        </button>
        <button className="calculator-key" data-value="." onClick={handleClick}>
          .
        </button>
        <button className="calculator-key" data-value="0" onClick={handleClick}>
          0
        </button>
        <button
          className="calculator-key operator"
          data-value="C"
          onClick={clear}
        >
          C
        </button>
        <button
          className="calculator-key operator"
          data-value="/"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="calculator-key operator equal-operator"
          data-value="="
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
