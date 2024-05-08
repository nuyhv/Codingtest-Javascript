function solution(bin1, bin2) {
    const decimalResult = binaryToDecimal(bin1) + binaryToDecimal(bin2);
    return decimalResult === 0 ? '0' : decimalToBinary(decimalResult);
}

function binaryToDecimal(binary) {
    let decimal = 0;

    for (let i = binary.length - 1, power = 0; i >= 0; i--, power++) {
        decimal += parseInt(binary[i]) * Math.pow(2, power);
    }

    return decimal;
}

function decimalToBinary(decimal) {
    let binary = '';

    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }

    return binary;
}