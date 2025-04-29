function solution(str1, str2) {
    var answer = '';
    const newStr1 = str1.split('')
    const newStr2 = str2.split('')
    
    for (let i = 0; i < str2.length; i++) {
        answer += newStr1[i] + newStr2[i]
    }
    return answer;
}