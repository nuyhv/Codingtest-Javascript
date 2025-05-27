function solution(numbers) {
    const sortedNum = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    
    if (sortedNum[0] === '0') return '0';
    
    return sortedNum.join('')
}