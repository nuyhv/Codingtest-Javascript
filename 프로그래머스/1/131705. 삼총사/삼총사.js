function solution(number) {
    // num을 순회해서 3개를 더했을 때 0이 되어야 함
    const len = number.length;
    let answer = 0;
    
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (number[i] +number[j] + number[k] === 0) answer++
            }
        }
    }
    return answer;
}