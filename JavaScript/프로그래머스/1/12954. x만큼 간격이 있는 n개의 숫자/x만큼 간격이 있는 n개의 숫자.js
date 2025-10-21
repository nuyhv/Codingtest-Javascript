function solution(x, n) {
    let arr = [x]
    
    for (let i = 2; i <= n; i++) {
        arr.push(x * i)
    }
    
    return arr;
}