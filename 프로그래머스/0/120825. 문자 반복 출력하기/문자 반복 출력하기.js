function solution(my_string, n) {
    var answer = '';
    
    for (const str of my_string) {
        answer += str.repeat(n);
    }
    
    return answer;
}