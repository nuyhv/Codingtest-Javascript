function solution(n, m) {
    const getGcd = (a, b) => {
        if (b === 0) return a;
        return getGcd(b, a % b);
    }
    const gcd = getGcd(n, m);
    const lcm = Math.abs(n * m) / gcd
    
    return [gcd, lcm]
}