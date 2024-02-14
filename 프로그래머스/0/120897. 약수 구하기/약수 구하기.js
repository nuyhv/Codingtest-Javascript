function solution(n) {
    var answer = [];
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            answer.push(i);
            if (i !== n / i) {
                answer.push(n / i);
            }
        }
    }

    return answer.sort((a, b) => a - b);
}