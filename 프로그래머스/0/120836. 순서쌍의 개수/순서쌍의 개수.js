function solution(n) {
    let count = 0;

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            if (i * i === n) {
                count++;
            } else {
                count += 2; 
            }
        }
    }

    return count;
}