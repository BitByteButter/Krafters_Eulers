// Brute force method -  
// for i in range(2, int(n**0.5)+1):   (Prime algorithm)



//By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number? 
//

function findprime(n){
        if(n<2){
            return false;
        }
        for(let i=2;i<(parseInt(Math.pow(n,0.5))+1);i++){
            if(n%i ==0){
                return false
            }
        }
        return true
}
function findnoatprime(k){
counter =1;
j=1;
while(counter <= k){
    if(findprime(j)){
        if(counter ==k){
            console.log(j);
        }
        counter++;
    }
    j++;
    
}
}
findnoatprime(10001)
