function solution(arr) {
    var answer = [];
    const isTwo = (el) => el === 2;
    
    const a = arr.findIndex(isTwo);
    const b = arr.lastIndexOf(2);
    
    answer = arr.includes(2) ? arr.slice(a, b + 1) : [-1]
    return answer;
}