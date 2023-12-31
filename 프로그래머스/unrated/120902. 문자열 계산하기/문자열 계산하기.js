function solution(my_string) {
    // split 했을 때 홀수 인덱스는 opt
    const list = my_string.split(' ');
    let answer = Number(list[0]);
    
    for (let i = 1; i < list.length; i += 2) {
        if (list[i] === '+') answer += Number(list[i + 1]);
        if (list[i] === '-') answer -= Number(list[i + 1]);
    }
    
    return answer;
}