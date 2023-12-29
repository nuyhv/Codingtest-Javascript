function solution(numbers) {
    // 각 배열 루프하면서 더한 후 sort
    let answer = [];
    const len = numbers.length;
    
    for (let i = 0; i < len; i++) {
        // 현재 인덱스는 제외해야 함
        for (let j = 0; j < len; j++) {
            if (i !== j) answer.push(numbers[i] + numbers[j]);
        }
    }
    
  return [...new Set(answer)].sort((a, b) => a - b);
}