function solution(n) {
    // 6과 n의 최소공배수
    const getGcd = (a, b) => {
        if (b === 0) return a;
        return getGcd(b, a % b);
    }
    const gcd = getGcd(n, 6);
    const lcm = Math.abs(n * 6) / gcd;
    
    return lcm / 6;
}