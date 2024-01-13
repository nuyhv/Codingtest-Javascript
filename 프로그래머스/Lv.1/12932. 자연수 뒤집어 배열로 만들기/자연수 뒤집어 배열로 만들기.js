function solution(n) {
    var answer = [];
    
    n = String(n);
    
    for (let i = n.length - 1; i >= 0; i--) {
        console.log(n[i]);
        answer.push(n[i] * 1);
    }
    
    return answer;
}