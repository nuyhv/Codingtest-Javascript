function solution(arr, n) {
    return arr.map((el, idx) => 
                   (arr.length % 2 === 1 && idx % 2 === 0) || (arr.length % 2 === 0 && idx % 2 === 1) 
                   ? el + n : el);
}