function solution(a, b, n) {
    let total = 0;

     while (n >= a) {
        const payBack = n - a + b;
        total += b;
        n = payBack;
    }

    return total;
}