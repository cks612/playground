import React from "react";
import { useState } from "react";
import "../../styles/_calculatorStyles.scss";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  const handleClickNum = e => {
    const { innerHTML } = e.target;
    setCalc(prev => prev + innerHTML);
  };

  const handleClickOper = e => {
    const { innerHTML } = e.target;
    if (innerHTML === "clear") setCalc("");
    if (operCheck) {
      setCalc(prev => prev + innerHTML);
      setOperCheck(false);
    }
  };

  const handleDot = e => {
    if (calc.length === 0) {
      return;
    }
    if (pointCheck) {
      setCalc(prev => prev + e.target.innerHTML);
      setPointCheck(false);
    }
  };

  const handleGetResult = () => {
    let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) === Infinity) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
      return false;
    } else {
      setCalc(prev => eval(replace_str));
      setOperCheck(true);
    }
  };
  return (
    <div className={isDarkMode ? "calculatorWrapper dark" : "calculatorWrapper"}>
      <div className="toggleBtn" onClick={() => setIsDarkMode(!isDarkMode)} />
      <div className="calculator">
        <div className="buttons">
          <h2 id="value">{calc}</h2>
          <span id="clear" onClick={handleClickOper}>
            clear
          </span>
          <span value="oper" onClick={handleClickOper}>
            /
          </span>
          <span onClick={handleClickOper}>*</span>
          <span value="num" onClick={handleClickNum}>
            7
          </span>
          <span onClick={handleClickNum}>8</span>
          <span onClick={handleClickNum}>9</span>
          <span onClick={handleClickOper}> - </span>
          <span onClick={handleClickNum}>4</span>
          <span onClick={handleClickNum}>5</span>
          <span onClick={handleClickNum}>6</span>
          <span id="plus" onClick={handleClickOper}>
            +
          </span>
          <span onClick={handleClickNum}>1</span>
          <span onClick={handleClickNum}>2</span>
          <span onClick={handleClickNum}>3</span>
          <span onClick={handleClickNum}>0</span>
          <span onClick={handleClickNum}>00</span>
          <span onClick={handleDot}>.</span>

          <span id="equal" onClick={handleGetResult}>
            =
          </span>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
