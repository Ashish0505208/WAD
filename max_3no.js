var a=parseFloat(prompt("Enter number1: "));
var b=parseFloat(prompt("Enter number2: "));
var c=parseFloat(prompt("Enter number3: "));
var num;
if(a>b && a>c){
    num=a;
}
if(b>a && b>c){
    num=a;
}
if(c>a && c>b){
    num=c;
}
console.log("The maximum of ",a,b,c," is:",num);
