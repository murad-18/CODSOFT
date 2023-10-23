function clearall() {
  document.getElementById("result").value = "";
  document.getElementById("equation").value = "";
  document.getElementById("result").style.opacity = "0";
  document.getElementById("equation").style.fontSize = "6rem";
  document.getElementById("equation").style.top = "50px";
  document.getElementById("equation").style.left = "20px";
}

// This function displays the values
function display(value) {
  document.getElementById("equation").value += value;
}

// This function evaluates the expression and returns the result
function calculate() {
  var eqVal = document.getElementById("equation").value;
  var evaluate = eval(eqVal);
  document.getElementById("result").value = `=${evaluate}`;
  resultDisplay();
}
function resultDisplay() {
  document.getElementById("result").style.opacity = "1";
  document.getElementById("result").style.transition =
    "opacity 0.5s ease-in-out";
  document.getElementById("result").style.fontSize = "6rem";
  document.getElementById("equation").style.fontSize = "3rem";
  document.getElementById("equation").style.transition =
    "font-size 0.5s ease-in-out";
  document.getElementById("equation").style.top = "10px";
  document.getElementById("equation").style.left = "12px";
}
