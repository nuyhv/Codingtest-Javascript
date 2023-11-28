function solution(strArr) {
    let answer = 0;
    const maxLength = Math.max(...strArr.map(str => str.length));
    
    for (let i = 1; i <= maxLength; i++) {
        const curGroupSize = strArr.filter(el => el.length === i).length;
        if (curGroupSize >= answer) {
            answer = curGroupSize;
        }
    }

    return answer;
}