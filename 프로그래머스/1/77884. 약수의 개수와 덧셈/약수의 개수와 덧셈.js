function solution(left, right) {
    let answer = 0;
    
    const getDivisors = (n) => {
    const divisors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
    }
    
    for (let i = left; i <= right; i++) {
        if (getDivisors(i).length % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}