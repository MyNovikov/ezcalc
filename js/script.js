let calcres;
let op;
function func(op) {
  var result;
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  calcres = result;
}
const onPlusBtnClick = () => {
  func("+");
};

const onMinusBtnClick = () => {
  func("-");
};

const onMultBtnClick = () => {
  func("*");
};

const onDivedBtnClick = () => {
  func("/");
};

const onResltBtnClick = () => {
  document.getElementById("res").innerHTML = calcres;
};

const plusBtn = document.querySelector("#plus");
plusBtn.onclick = onPlusBtnClick;

const minusBtn = document.querySelector("#minus");
minusBtn.onclick = onMinusBtnClick;

const multBtn = document.querySelector("#mult");
multBtn.onclick = onMultBtnClick;

const divideBtn = document.querySelector("#divide");
divideBtn.onclick = onDivedBtnClick;

const resltBtn = document.getElementById("btnRes");
resltBtn.onclick = onResltBtnClick;
