function final(gg){
square = 0 
sum =0;
for(let i=0;i<=gg;i++){
    square = square + Math.pow(i,2);
}
console.log(square);

for(let i=1;i<=gg;i++){
    sum = sum+i;
}

suared = Math.pow(sum,2);
finaldiff = suared-square;
console.log("Final diff is:"+finaldiff);
}
final(100);
