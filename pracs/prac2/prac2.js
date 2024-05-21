function greet(name) {
    alert("Здравствуйте, " + name + "! :)");
  }
let username = prompt("Как Вас зовут?")
if (!username)
    username = "аноним";
greet(username);

let btnGreet = document.getElementById("greeting");
btnGreet.onclick = function() { greet(username) };


let btnLess = document.getElementById("lessNumber"); //сравнение через arr.sort используется в практической работе 1, поэтому здесь другая лексика
btnLess.onclick = function min(){
    alert("Введите два числа для поиска меньшего.")
    let a = prompt("Введите a");
    let b = prompt("Введите b");
    if(a < b)
      alert(a + " меньше " + b);
    else if(a > b)
      alert(b + " меньше " + a);
    else alert("И a, и b равны " + a);
}


function squareEquation(a,b,c){
  let d =  b*b - 4*a*c; 
  let sqrtD = Math.sqrt(Math.abs(d));
  if (d > 0) 
    alert("Корни: " + (-b + sqrtD)/(2*a) + " и " + (-b - sqrtD)/(2*a));
  else if (d == 0) 
    alert("Корень: " -b/(2*a));
  else 
    alert("Корни: " + -b/(2*a) + " + " + sqrtD/(2*a) + "i и " + -b/(2*a) + " - " + sqrtD/(2*a) + "i");
}

let btnSqEq = document.getElementById("sqEq");
btnSqEq.onclick = function triggerSqEq(){
  alert("Введите коэффициенты квадратного уравнения Ax^2 + Bx + C = 0.");
  let a = prompt("Введите A");
  if(a == null)
    return;
  if(a == 0){
      alert("Некорректный ввод");
      return;
    }
  let b = prompt("Введите B");
  if(b == null)
    return;
  let c = prompt("Введите C");
  if(c == null)
    return;
  squareEquation(a,b,c);
}

let btnPlus = document.calculator.plus;
btnPlus.onclick = function plus(){
  let x = Number(document.calculator.firstNumber.value);
  let y = Number(document.calculator.secondNumber.value);
  document.calculator.firstNumber.value = +x + +y;
  document.calculator.secondNumber.value = null;
}

let btnMinus = document.calculator.minus;
btnMinus.onclick = function minus(){
  let x = Number(document.calculator.firstNumber.value);
  let y = Number(document.calculator.secondNumber.value);
  document.calculator.firstNumber.value = +x - +y;
  document.calculator.secondNumber.value = null;
}

let btnDiv = document.calculator.div;
btnDiv.onclick = function div(){
  let x = Number(document.calculator.firstNumber.value);
  let y = Number(document.calculator.secondNumber.value);
  if(y) 
    document.calculator.firstNumber.value = +x / +y;
  else document.calculator.firstNumber.value = null;
  document.calculator.secondNumber.value = null;
}

let btnMult = document.calculator.mult;
btnMult.onclick = function mult(){
  let x = Number(document.calculator.firstNumber.value);
  let y = Number(document.calculator.secondNumber.value);
  document.calculator.firstNumber.value = +x * +y;
  document.calculator.secondNumber.value = null;
}