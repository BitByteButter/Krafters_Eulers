heighestprod =998001;
final=[];
counter =999;
exit = false;
function reverse(str) { 
    return str.split("").reverse().join("");
}
function findpalindrom(check){
    check = check.toString();
    
    if(check == reverse(check)){
       
        return check;
    }
}
for (let index = heighestprod; index > 999; index--) {
    if(exit){
        break;
    }
    
    if(a = findpalindrom(index)){
        final.push(a);
       
        for(let cc=999;cc>1;cc--){
             pp = a/cc;
           console.log(pp.toString());
        if(pp.toString().length ==3){
            
            console.log("Its done");
            console.log("Final:"+a);
            exit=true;
            break;
        } 
        }
        
        
        }
}
console.log(final)
