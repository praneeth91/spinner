const arr1 = ["|","/","-","\\","|","/","-","\\","|","\n"];
let timer = 100;
for(let char of arr1){
  setTimeout(() => {
    process.stdout.write(`\r ${char}`);
  }, timer+=200);
}

