function solution(n) {
    const arr = String(n).split('');
    const sortedArr = arr.sort((a, b) => b - a);

    return parseInt(sortedArr.join(''), 10);
}