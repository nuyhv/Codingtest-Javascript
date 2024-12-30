function solution(n) {
    /* 재귀
    const fib = (n) => {
        if (n === 0) return 0;
        else if (n === 1) return 1;
        else return fib(n - 1) + fib(n - 2);
    }
    */
    
    // for
    const int = 1234567;
    const fib = (n) => {
        let arr = [0, 1];
        for (let i = 2; i <= n; i++) {
            arr.push((arr[i - 1] + arr[i - 2]) % int);
        }
        return arr.pop();
    }
    
    return fib(n);
}