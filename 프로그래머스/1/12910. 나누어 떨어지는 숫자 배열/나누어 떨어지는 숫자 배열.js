function solution(arr, divisor) {
    var answer = [];
    
    for (const num of arr) {
        if (num % divisor === 0) answer.push(num);
    }
    
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}