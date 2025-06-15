// syntax-- var : varname datatype=value
var num1 = 20;
// let var2:number=30  //can't redeclare coz with let we can't redclare as in number.js also have var2 
var num2 = 30;
var num3 = 40;
var total = num1 + num2 + num3;
console.log(total);
var oct = 1;
var hexa = 0x00001;
var binary = 1;
var total1 = oct + hexa + binary;
console.log(total1);
// conversion
var item1 = 100;
var item2 = "50";
var item2Convert = Number(item2);
var item2Convert = +item2;
// console.log(item1+item2Convert)
console.log(item1 + +item2);
// type inference(guess) with numbers
var data = true;
