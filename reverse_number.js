var a= parseFloat(prompt("Enter the number: "));
string=a.toString()
var result='';
for(var i=string.length-1;i>=0;i--){
    result+=string[i];
}
console.log(result);
