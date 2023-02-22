function normalsolve(range){
save = [];
counter=2
finish = true
while(counter<=range){
    if(range%counter==0){
        range = range/counter
        console.log("Is factor:"+counter);
        save.push(counter);
        
    }
    else {
        counter++
    }
    
    
}console.log("Last element:"+save[save.length-1])    
}

normalsolve(600851475143)
