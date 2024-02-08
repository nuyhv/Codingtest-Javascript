const factorial = (n) => {
    if (n === 1 || n === 0) return n;
    
    else return n * factorial(n - 1);
}

function solution(n) {
    let ans = 0;
    
    while (factorial(ans) <= n) {
        ans++
    }
    
    return ans - 1;
}