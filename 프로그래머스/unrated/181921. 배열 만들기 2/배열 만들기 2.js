function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        String(i).match(/^[05]+$/) ? answer.push(i) : null
    }
    return answer.length !== 0 ? answer : [-1];
}