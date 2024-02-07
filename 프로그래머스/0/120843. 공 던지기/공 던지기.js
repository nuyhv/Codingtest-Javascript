function solution(numbers, k) {
    let idx = 0;
    const len = numbers.length;
    
    return numbers[(idx += 2 * k - 2) % len];
}