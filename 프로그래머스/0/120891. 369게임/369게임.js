function solution(order) {
    var answer = 0;
    
    for (const n of `${order}`) {
        if (n === '3' || n === '6' || n === '9') answer++;
    }
    
    return answer;
}