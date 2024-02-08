function solution(n) {
    const factors = [];
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    
    return [...new Set(factors)];
}