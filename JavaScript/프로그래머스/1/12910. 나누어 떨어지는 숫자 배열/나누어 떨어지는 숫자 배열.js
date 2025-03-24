function solution(arr, divisor) {
    var ans = [];
    
    for (const num of arr) {
        if (num % divisor === 0) ans.push(num);
    }
    
    return ans.length > 0 ? ans.sort((a, b) => a - b) : [-1];
}