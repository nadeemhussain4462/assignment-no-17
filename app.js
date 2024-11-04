// Assignmetn no 17 
// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE  |
// Question no 1
// Write a custom function power ( a, b ), to calculate the value of a raised to b.
function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(2, 3));

