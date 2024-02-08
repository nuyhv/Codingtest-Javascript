function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    const [a, b] = numbers;
    
    return a * b;
}