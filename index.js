
let display = document.getElementById('input');
let numberButtons = document.querySelectorAll('.btn-number');
let operatorButtons = document.querySelectorAll('.btn-operator');

document.getElementById("cleared").addEventListener('click', () => {
  display.value = "";
  setTimeout(() => {
    display.value = "";
  }, 1000);
});

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.id;
  });
});

document.getElementById('equalto').addEventListener('click', () => {
  const value = display.value;
  display.value = evaluateExpression(value);
});

document.getElementById('backspace').addEventListener('click', () => {
  display.value = display.value.slice(0, -1);
});

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.textContent;
  });
});

function evaluateExpression(expression) {
  return eval(expression);
}

  document.addEventListener("keydown", (e)=>{
  
  e.preventDefault();
  //alert(e.key);
  if (e.key === "0") {
    display.value += "0";
  } else if (e.key === "1") {
    display.value += "1";
  } else if (e.key === "2") {
    display.value += "2";
  } else if (e.key === "3") {
    display.value += "3";
  } else if (e.key === "4") {
    display.value += "4";
  } else if (e.key === "5") {
    display.value += "5";
  } else if (e.key === "6") {
    display.value += "6";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "8") {
    display.value += "8";
  } else if (e.key === "9") {
    display.value += "9";
  }
  if (e.key === "+") {
    display.value += "+";
  } else if (e.key === "-") {
    display.value += "-";
  } else if (e.key === "*") {
    display.value += "*";
  } else if (e.key === "/") {
    display.value += "/";
  }

  if (e.key === ".") {
    display.value += ".";
  }
  if (e.key === "Enter") {
    const value = display.value;
    calculate(value);
  }
  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});


function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      display.value = "Can't divide 0 with 0";
      setTimeout(() => {
        display.value = "";
      }, 2000);
    } else {
      display.value = calculatedValue;
    }
  }
