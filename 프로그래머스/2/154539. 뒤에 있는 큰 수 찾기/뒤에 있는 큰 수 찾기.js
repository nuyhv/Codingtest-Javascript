function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    let stack = [];
    for (let i = 0; i < numbers.length; i++){
        while (stack && numbers[stack[stack.length - 1]] < numbers[i]){
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}