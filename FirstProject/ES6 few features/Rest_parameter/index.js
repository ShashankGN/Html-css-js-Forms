function show(a, b, ...args) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("args:", args);

    
}

show(1, 2, 3, 4, 5);




function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); 
console.log(fun(1, 2, 3)); 
console.log(fun(1, 2, 3, 4, 5));                
