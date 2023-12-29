function solution(x, n) {
    return Array(n).fill(x).map((num, i) => num * (i + 1));
}