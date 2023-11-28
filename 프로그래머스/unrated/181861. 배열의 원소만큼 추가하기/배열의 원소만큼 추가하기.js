function solution(arr) {
    let answer = [];
    
    for (const el of arr) {
        answer.push(...Array(el).fill(el));
    }
    return answer;
}