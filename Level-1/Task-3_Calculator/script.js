function clearall() {
  document.getElementById("result").value = "";
  document.getElementById("equation").value = "";
  document.getElementById("result").style.opacity = "0";
  document.getElementById("equation").style.fontSize = "5rem";
  document.getElementById("equation").style.top = "50px";
  document.getElementById("equation").style.left = "20px";
}

function display(value) {
  document.getElementById("equation").value += value;
}

function calculate() {
  var eqVal = document.getElementById("equation").value;
  var evaluate = eval(eqVal);
  document.getElementById("result").value = `=${evaluate}`;
  resultDisplay();
}

function remove() {
  let equation = document.getElementById("equation");
  let newValue = equation.value.slice(0, -1);
  equation.value = newValue;
}

function resultDisplay() {
  document.getElementById("result").style.opacity = "1";
  document.getElementById("result").style.transition =
    "opacity 0.5s ease-in-out";
  document.getElementById("result").style.fontSize = "5rem";
  document.getElementById("equation").style.fontSize = "3rem";
  document.getElementById("equation").style.transition =
    "font-size 0.5s ease-in-out";
  document.getElementById("equation").style.top = "10px";
  document.getElementById("equation").style.left = "12px";
}
