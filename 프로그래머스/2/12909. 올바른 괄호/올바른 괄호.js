function solution(s) {
    const stack = [];
    
    [...s].map(str => {
        (str === ')' && stack[stack.length - 1] === '(') ? stack.pop() : stack.push(str);
    })
    
    return stack.length === 0;
}