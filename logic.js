let oPerform;
let screen = document.getElementById("screen");
let numbers = document.querySelectorAll(".numbers");
for (item of numbers) {
  item.addEventListener("click", (e) => {
    const numberText = e.target.innerText;
    // console.log("number text is ", numberText);
    screen.value += numberText;
  });
}
const arr = [9, 5, 4];
operators = document.querySelectorAll(".operator");

// for (item of operators) {
//   item.addEventListener("click", (e) => {
//     let operatorText = e.target.innerText;
//     console.log(operatorText);

//     document.getElementById("screen").value += operatorText;
//   })};

function gogogo(chr){
  var screen = document.getElementById('screen');
  var xy = screen.value.slice(0, -1);
  var yz = screen.value.charAt(screen.value.length - 1);
  if(yz != "+" && yz != "X" && yz != "-" && yz != "÷" && yz !="%"){
    screen.value += chr;
  }
  else{
    screen.value = xy + chr;
  }
}

function equal() {
  let screen = document.getElementById("screen").value;
  for (let i = 0; i <= screen.length; i++) {
    if (screen[i] == "X") {
      oPerform = "multiply";
    }
    if (screen[i] == "+") {
      oPerform = "add";
    }
    if (screen[i] == "-") {
      oPerform = "sub";
    }
    if (screen[i] == "÷") {
      oPerform = "divide";
    }
    if (screen[i] == "%") {
      oPerform = "percent";
    }
  }

  if (oPerform == "multiply") {
    const a = screen.split("X")[0];
    const b = screen.split("X")[1];
    result = a * b;
    document.getElementById("screen").value = result;
  }
  if (oPerform == "add") {
    const a = parseInt(screen.split("+")[0]);
    const b = parseInt(screen.split("+")[1]);
    result = a + b;
    document.getElementById("screen").value = result;
  }
  if (oPerform == "sub") {
    const a = screen.split("-")[0];
    const b = screen.split("-")[1];
    result = a - b;
    document.getElementById("screen").value = result;
  }
  if (oPerform == "divide") {
    const a = screen.split("÷")[0];
    const b = screen.split("÷")[1];
    result = a / b;
    document.getElementById("screen").value = result;
  }
  if (oPerform == "percent") {
    const a = screen.split("%")[0];
    const b = screen.split("%")[1];
    result = (a / 100) * b;
    document.getElementById("screen").value = result;
  }
}

function clrscr() {
  screen.value = "";
}
