function solution(my_string) {
    const arr = [...my_string];
    let stack = [];
    
    for (const el of arr) {
        if (!stack.includes(el)) stack.push(el);
    }
    
    return stack.join('');
}