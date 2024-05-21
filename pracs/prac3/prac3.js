let arr1 = [1,3,'пять',534,'!',0];
document.getElementById("arr1").innerHTML = arr1;

let arr2 = new Array(6,'кошка',-40,'(');
document.getElementById("arr2").innerHTML = arr2;

let arr3 = Array.of('аристотель',2,'...',73,"42!");
document.getElementById("arr3").innerHTML = arr3;

document.getElementById("task2").textContent += arr1[4];
arr1[4] = "?";
document.getElementById("task2").textContent += " => " + arr1[4];

document.getElementById("task3").title = arr1.length;

let out1 = document.getElementById("out1");
for(let i = 0; i < arr1.length; i++)
    out1.textContent += " " + arr1[i];

let out2 = document.getElementById("out2");
arr2.forEach((i) => out2.textContent += " " + i);

let arr23 = [...arr2, ...arr3];
document.getElementById("arr23").innerHTML = "Задание 5. " + arr23;

document.getElementById("pop").innerHTML = "Задание 6. " + arr23.pop();

arr23.unshift(":D");
document.getElementById("unshift").innerHTML = "Задание 8. " + arr23;


let btnArr = document.arr.btnArr;
btnArr.onclick = function sqrtArr(){
  let arr = document.arr.userArr.value.split(' ');
  if (arr[0] == ""){
    document.arr.userRes.value = "";
    return;
  }
  let arrSqrt = new Array;
  let arrRes = '';
  for(let i = 0; i < arr.length; i++){
    if(arr[i] != ""){
        arrSqrt.push(Math.sqrt(arr[i]).toFixed(4));
        if(arrSqrt[i] != "NaN") 
            arrRes += arrSqrt[i] + " ";
        else arrRes += "∅ ";
    }
  }
  document.arr.userRes.value = arrRes;
}

let btnDate = document.getElementById("date");
btnDate.onclick = function showDate(){
    let date = new Date();
    alert(date);
    let months = [" января ", " февраля ", " марта ", " апреля ", " мая ", " июня ", " июля ", " августа ", " сентября ", " октября ", " ноября ", " декабря "];
    alert(date.getDate() + months[date.getMonth()] + date.getFullYear() + " года");
}

let btnRand = document.getElementById("randMult");
btnRand.onclick = function randMult(){
    let x = Math.round(Math.random() * 50);
    let y = Math.round(Math.random() * 50);
    alert(x + " * " + y + " = " + x*y);
}