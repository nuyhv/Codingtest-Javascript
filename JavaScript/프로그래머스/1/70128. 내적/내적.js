function solution(a, b) {
    const len = a.length
    let ans = 0;
    
    let i = 0;
    while (i < len) {
        ans += a[i]*b[i];
        i++
    }
    
    return ans
}