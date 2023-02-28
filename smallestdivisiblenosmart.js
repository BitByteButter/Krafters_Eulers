function findpowergreatherthan(){
    let prime = [2,3,5,7,11,13,17,19]
    let holder = [];
    let total = 1;
    for(let i=0;i<=(prime.length)-1;i++){
        // console.log("ruNNING ON "+ i);
        for(let j=0;j<6;j++){
            if(Math.pow(prime[i],j)>20){
                total = total * Math.pow(prime[i],(j-1));
                // console.log(total);
                holder.push(j-1);

                break;
             }
        }
      
    }
    return total;
}

console.log("The answer is:"+findpowergreatherthan())
