function solution(arr) {
    const sumArr = arr.reduce((acc, cur) => acc + cur, 0)
    
    return sumArr / arr.length;
}