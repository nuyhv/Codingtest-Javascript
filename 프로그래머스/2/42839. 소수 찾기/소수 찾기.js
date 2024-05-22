function solution(numbers) {
    const numberSet = new Set();

    function generateCombinations(prefix, str) {
        if (prefix.length > 0) {
            numberSet.add(Number(prefix));
        }
        for (let i = 0; i < str.length; i++) {
            generateCombinations(prefix + str[i], str.slice(0, i) + str.slice(i + 1));
        }
    }

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    generateCombinations("", numbers);

    let primeCount = 0;
    numberSet.forEach(number => {
        if (isPrime(number)) {
            primeCount++;
        }
    });

    return primeCount;
}