let num1 = prompt("Enter First Number");
num2 = prompt("Enter Second Number");
ops = prompt("Enter Operation");

let val1 = parseInt(num1);
let val2 = parseInt(num2);

let ans = eval(`${num1}${ops}${num2}`);
document.write(ans);
