let variable = "value";
setTimeout(() => variable = "new value");

console.log(variable);
setTimeout(()=>console.log(variable));
