function solution(brown, yellow) {
    function getDivisors(n) {
        const divisors = []
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push([i, n / i]);
            }
        }
        return divisors;
    }

    const totalTiles = brown + yellow;

    const divisors = getDivisors(yellow);

    for (let [h, w] of divisors) {
        let totalW = w + 2;
        let totalH = h + 2;
        
        if (totalW * totalH === totalTiles) {
            return [totalW, totalH];
        }
    }
    return [];
}