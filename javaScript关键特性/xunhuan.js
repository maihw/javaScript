for (初始化;条件;增量) {循环代码;}

for (var i = 1;i <= 100;i++) {console.log(i);}

for (var i = 1;i <= 100;i++) {if (i % 7 ==0) {console.log(i);break;}}


while(条件) {
    //需要执行的代码
}

var i = 1;
while (i <= 100) {
    console.log(i);
    i++
}

    
//do while循环的语法结构
do {
    //需要执行的代码
} while (条件);

var i = 1;
do {
    console.log(i);
    i++;
}while (i <= 100);
/*注：而这两者的区别是，do while循环在检测条件之前就会执行，也就是说即使条件为false，do while也会执行
，也就是说，即使条件为false，do while也会执行一次循环代码。而while循环只有在条件为
真时才执行。也可以这样简单记忆：while循环，先判断再执行;do while循环先执行一次再判断
*/


function f(a,b) {
    console.log(a + b);
}

var f = function (a,b) {
    console.log(a + b);
};

function f(a, b) {
  return a + b;
}
function f(a, b, c) {
  return a + b + c;
}
var result = f(5, 6);
result; // returns NaN


var f = function (a, b) {
  a + b;
};
console.log(f(2, 3)); // 结果为 undefined

var f = function (a, b) {
  return a + b;
};
console.log(f(2, 3)); // 结果为 5