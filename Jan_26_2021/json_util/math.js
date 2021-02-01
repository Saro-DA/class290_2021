
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function pow(num, p) {
    if(p === 0) return 1;

    return num * pow(num, p - 1);
}

module.exports = {
    addTwoNumbers,
    pow
}