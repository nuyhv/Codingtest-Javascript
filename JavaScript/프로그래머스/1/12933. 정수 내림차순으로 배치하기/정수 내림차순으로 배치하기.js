function solution(n) {
    const arr = [...String(n)]
    
    return BigInt(arr.sort((a, b) => (b - a)).join(''));
}