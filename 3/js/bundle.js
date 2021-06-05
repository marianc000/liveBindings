let variable = "value";
setTimeout(() => variable = "new value");
var variable$1 = variable;

console.log(variable$1);
setTimeout(()=>console.log(variable$1));
