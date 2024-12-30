var a=parseFloat(prompt("Enter the number: "));
var count=0
for(var i=1;i<=a;i++){
    if(a%i==0){
        count+=1
    }
}
if(count===2){
    console.log("is prime");
}
if(count!=2){
    console.log("is not prime");
}
