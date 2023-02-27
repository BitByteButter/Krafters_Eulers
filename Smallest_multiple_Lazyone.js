//Lazy -> Not optimized can take hrs 

let counter =  232792500;
let breakpoint = true;
let counters_c = 0;
let debug = 0;
while(breakpoint){
    for(var i=2;i<=20;i++){
        if(counter%i==0){
            console.log("Counter is:"+counter);
            console.log("Hit"+counters_c);
            counters_c = counters_c+1;
            if(counters_c > 18){
                console.log("Found it bro:"+counter);
                breakpoint =false;
                break;
            }
        }
    }
    counters_c=0;
    counter = counter+1;
}

