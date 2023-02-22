function pass(k){
var sum=0
for (let index = 0; index < k; index++){
    if (index%3==0 || index%5==0) {
       sum = sum + index;
        
    }
}
    console.log(sum);
}
pass(1000)
