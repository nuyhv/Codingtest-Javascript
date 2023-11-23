function solution(my_string, indices) {
    let answer = '';
    
    for (let i = 0; i < my_string.length; i++) {
        !indices.includes(i) && (answer += my_string[i]);
    }
    return answer;
}
