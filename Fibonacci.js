function gg(){
vessel = 1 ;
first  = 1;
sum = 0;
evensum=0;
while(sum < 4000000) {
    sum = vessel+first;
        if(sum%2==0){
            evensum = sum + evensum;
            
        }
    first = vessel; 
    vessel = sum;
    
};console.log("sum="+evensum);}
gg()
