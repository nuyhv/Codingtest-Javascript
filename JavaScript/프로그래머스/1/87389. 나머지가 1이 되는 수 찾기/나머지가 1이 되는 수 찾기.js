function solution(n) {
    let x = 0
    
    while (n % x !== 1) {
        x++
    }
    return x;
}