function solution(numbers, n) {
    let answer = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        answer <= n ? answer += numbers[i] : answer;
    }
    return answer;
}