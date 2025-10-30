function solution(absolutes, signs) {
    const arr = absolutes.map((num, i) => signs[i] ? num : -num)
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}