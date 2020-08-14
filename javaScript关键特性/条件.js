if (条件){
    //当条件为true时执行的语句
} else {
    //当条件为false时执行的语句
}

if (3 > 2) {
    console.log("我真帅");
} else {
    console.log("不可能");
}

var d = new Date().getDay();
if (d == 0) {
    console.log("今天星期天");
} else if (d == 1) {
    console.log("今天星期一");
} else if (d == 2) {
    console.log("今天星期二");
} else {
    console.log("好多啊，我不想写了");
}


switch(k){
    case 1:
        执行代码块1;
        break;
    case 2:
        执行代码块2;
        break;
    default:
        默认执行（k值没有在case中找到匹配时）;
}

var d = new Date().getDay();
switch (d) {
  case 0:
    console.log("今天星期天");
    break;
  case 1:
    console.log("今天星期一");
    break;
  case 2:
    console.log("今天星期二");
    break;
  case 3:
    console.log("今天星期三");
    break;
  case 4:
    console.log("今天星期四");
    break;
  case 5:
    console.log("今天星期五");
    break;
  default:
    console.log("今天星期六");
    break;
}