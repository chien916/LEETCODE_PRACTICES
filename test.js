let x = [64];
let y = x;
let z = y;
while(!z[0]===0&&y[0]===0){
    x[0] = x[0] - 1;
    console.log(x);
}