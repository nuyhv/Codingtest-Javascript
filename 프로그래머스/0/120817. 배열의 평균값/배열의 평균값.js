function solution(numbers) {
    let sum = 0;
    
    for (const num of numbers) {
        sum += num;
    }
    
    return sum / numbers.length;
}