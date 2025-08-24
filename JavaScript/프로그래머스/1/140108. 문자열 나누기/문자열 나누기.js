function solution(s) {
    let stack = []
    let count = 0
    
    for(let i = 0; i < s.length; i += 1){
        stack.push(s[i]);
        
        const same = stack.filter((item) => item === stack[0]);
        const diff = stack.filter((item) => item !== stack[0]);
        
        if (same.length === diff.length){
            count ++;
            stack = [];
        }
    }
    
    if (stack.length !== 0) count ++;
    
    return count
}