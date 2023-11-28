function solution(arr) {
    let i = arr.length;
    let def = Math.pow(2, Math.ceil(Math.log2(i))) - i;
    while (i % 2 === 0) {
        i++;
    }
    return [...arr, ...Array(def).fill(0)];
}