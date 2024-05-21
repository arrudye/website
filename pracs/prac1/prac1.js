let var_task1='Hello';
document.getElementById("typeof").innerHTML="Задание 1. "+typeof(var_task1);


let time = prompt('Какое сейчас время суток?', '');
time = time.toLowerCase();
switch(time){
    case 'утро': 
        alert('Доброе утро!');
        break;
    case 'день': 
        alert('Добрый день!');
        break;
    case 'вечер': 
        alert('Добрый вечер!');
        break;
    case 'ночь': 
        alert('Доброй ночи!');
        break;
    default: 
        alert('Здравствуйте!');
        break;
}

let forcycle = document.getElementById("for");
for(let i = 1; i<=40;i++)
    forcycle.textContent += " " + i;

let whilecycle = document.getElementById("while");
let i = 1; 
while(i<=40){
    whilecycle.textContent += " " + i;
    i++;
}

let dowhilecycle = document.getElementById("dowhile");
let j = 1; 
do{
    dowhilecycle.textContent += " " + j;
    j++;
}while(j<=40);

let btn4 = document.getElementById("task4");
btn4.onclick = function task4(){
    alert("Введите три числа для сортировки!")
    let x = prompt("Введите x");
    let y = prompt("Введите y");
    let z = prompt("Введите z");
    let arr = [ x,y,z ];
    arr.sort(function(a, b) { return a - b; });
    alert("Результат сортировки: " + arr);
}

let cycleTo15 = document.getElementById("cycleTo15");
for(let i = 0; i<=15;i++){
    cycleTo15.textContent += i;
    if(i%2==0)
        cycleTo15.textContent +="-чётное ";
    else cycleTo15.textContent +="-нечётное ";
}

let btn6 = document.getElementById("task6");
btn6.onclick = function task6(){
    let x = prompt("Введите любое число больше 5");
    if(x>5)
        alert("Поздравляем, Вы знаете числа больше пяти! ☆*･゜ﾟ･(^O^)/･゜ﾟ･*☆");
    else if(x == null)
        return;
    else task6();
}

let cycleEven = document.getElementById("cycleEven");
for(let i = 8; i<=20;i++){
    if(i%2==0)
        cycleEven.textContent +=i+" ";
}

let cycleSum = document.getElementById("cycleSum");
let sumCycles = 0;
for(let i = 0; i<=1000;i++){
    if(i%3==0 || i%5==0)
        sumCycles+=i;
}
cycleSum.textContent = sumCycles;

let btn9 = document.getElementById("task9");
btn9.onclick = function task9(){
    let x = prompt("Введите любое число из 3 цифр");
    let temp = x;
    let sum = 0;
    while (temp > 0) {
        let n = temp%10;
        sum += n*n*n;
        temp = parseInt(temp/10);
    }
    if (sum == x) 
        alert("Число Армстронга! :)");
    else alert("Не число Армстронга :(");
}

let cycleStars = document.getElementById("cycleStars");
for(let i = 1; i<=5;i++){
    for(let j = 0; j<i; j++)
        cycleStars.textContent +="* ";
    cycleStars.textContent +="\r\n";
}