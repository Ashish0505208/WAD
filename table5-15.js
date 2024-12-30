var result = "Number\tSquare\tCube\n";
for (var i = 5; i <= 15; i++) {
    var square = i * i;
    var cube = i * i * i;
    result += `${i}\t\t${square}\t\t${cube}\n`;
}
alert(result);
