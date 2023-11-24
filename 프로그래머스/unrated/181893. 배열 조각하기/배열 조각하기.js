function solution(arr, query) {
    var answer = arr;
    
    for (let i = 0; i < query.length; i++) {
        answer = i % 2 === 0 ? answer.slice(0, query[i] + 1) : answer.slice(query[i], answer.length + 1)
    }
    return answer;
}