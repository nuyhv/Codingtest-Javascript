function solution(numbers) {
    const arr = new Array(10).fill(0).map((num, i) => num + i);
    const diff = arr.filter(num => !numbers.includes(num));
    
    return diff.reduce((acc, cur) => acc + cur);
}
