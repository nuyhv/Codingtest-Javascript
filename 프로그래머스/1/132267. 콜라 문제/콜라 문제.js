function solution(a, b, n) {
    let ans = 0;

     while (n >= a) {
        const payBack = n - a + b;
        ans += b;
        n = payBack;
    }

    return ans;
}