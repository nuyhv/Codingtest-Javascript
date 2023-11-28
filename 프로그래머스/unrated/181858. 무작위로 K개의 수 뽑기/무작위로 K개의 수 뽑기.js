function solution(arr, k) {
    let reducedArr = arr.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
    if (reducedArr.length < k) {
        for (let i = reducedArr.length; i < k; i++) {
            reducedArr.push(-1);
        }
    } else if (reducedArr.length > k) {
        reducedArr = reducedArr.slice(0, k);
    }
    return reducedArr;
}