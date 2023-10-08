document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.querySelector(".input-text");
  const acButton = document.querySelector(".reset");
  let currentNum = "";
  let previousNum = "";
  let currentOperator = "";
  let operatorJustCliked = false;

  const updateDisplay = () => {
    inputText.value = currentNum;
  };

  const clearData = () => {
    currentNum = "";
    previousNum = "";
    currentOperator = "";
    acButton.innerText = "AC";
  };

  const operate = () => {
    previousNum = parseFloat(previousNum);
    currentNum = parseFloat(currentNum);

    switch (currentOperator) {
      case "+":
        currentNum = previousNum + currentNum;
        break;
      case "-":
        currentNum = previousNum - currentNum;
        break;
      case "×":
        currentNum = previousNum * currentNum;
        break;
      case "÷":
        currentNum = previousNum / currentNum;
        break;
      case "%":
        currentNum = previousNum % currentNum;
        break;
        defalut: return;
    }
    currentOperator = "";
  };

  document
    .querySelector(".button-wrapper")
    .addEventListener("click", function (e) {
      const buttonValue = e.target.innerText;
      acButton.innerText = "C";
      if (e.target.matches(".number")) {
        if (operatorJustCliked) {
          currentNum = "";
          operatorJustCliked = false;
        }
        currentNum += buttonValue;
        updateDisplay();
      } else if (e.target.matches(".operator")) {
        if (currentOperator && currentNum && previousNum) {
          operate();
          updateDisplay();
          previousNum = currentNum;
          currentNum = "";
        } else if (!previousNum) {
          previousNum = currentNum;
          currentNum = "";
        }

        if (buttonValue === "=") {
          if (previousNum && currentOperator) {
            operate();
            updateDisplay();
            previousNum = "";
          }
        } else if (["+", "-", "×", "÷", "%"].includes(buttonValue)) {
          currentOperator = buttonValue;
          currentNum = buttonValue;
          updateDisplay();
          operatorJustCliked = true;
        } else if (buttonValue === ".") {
          if (!currentNum.includes(".")) {
            currentNum += ".";
            updateDisplay();
          }
        }
      } else if (e.target.matches(".reset")) {
        clearData();
        updateDisplay();
      }
    });
});
