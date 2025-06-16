var sym1 = Symbol();
var sym2 = Symbol();

var sym3=Symbol('abc');
var sym4=Symbol('abc');

// console.log(sym1==sym2)
// console.log(sym1);
// console.log(sym2);

// console.log(sym3==sym4)
console.log(sym3);
console.log(sym4);

const dId=Symbol('id');
const obj={
    [dId]:100,
    name:'khushi'
}
console.log(obj[dId])
// console.log(obj.name)