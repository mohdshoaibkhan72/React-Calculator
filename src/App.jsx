import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(" ");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((preValue) => preValue + value);
    }
  };

  return (
    <> <h1 >Calculator </h1>
      <div className="conatainer"> 
     
        <div className="calc">
         
          <input type="text" value={input} ></input>

          <div className="btn" >
            <button onClick={() => { handleButtonClick("C") }} >
              C
            </button>
            <button
              onClick={() => {
                handleButtonClick("<");
              }}
            >
              {" "}
              &lt;
            </button>
            <button
              onClick={() => {
                handleButtonClick("%");
              }}
            >
              %
            </button>
            <button
              onClick={() => {
                handleButtonClick("/");
              }}
            >
              /
            </button>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                handleButtonClick("7");
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                handleButtonClick("8");
              }}
            >
              {" "}
              8
            </button>
            <button
              onClick={() => {
                handleButtonClick("9");
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                handleButtonClick("*");
              }}
            >
              *
            </button>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                handleButtonClick("4");
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                handleButtonClick("5");
              }}
            >
              {" "}
              5
            </button>
            <button
              onClick={() => {
                handleButtonClick("6");
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                handleButtonClick("-");
              }}
            >
              -
            </button>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                handleButtonClick("1");
              }}
            >
              1
            </button>
            <button
              onClick={() => {
                handleButtonClick("2");
              }}
            >
              {" "}
              2
            </button>
            <button
              onClick={() => {
                handleButtonClick("3");
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                handleButtonClick("+");
              }}
            >
              +
            </button>
          </div>
          <div className="btn">
            <button
              onClick={() => {
                handleButtonClick("0");
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                handleButtonClick("00");
              }}
            >
              {" "}
              00
            </button>
            <button
              onClick={() => {
                handleButtonClick(".");
              }}
            >
              .
            </button>
            <button
              onClick={() => {
                handleButtonClick("=");
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
