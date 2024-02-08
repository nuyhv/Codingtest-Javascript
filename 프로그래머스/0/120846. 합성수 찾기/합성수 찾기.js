const countDiv = (n) => {
    let count = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            if (i === Math.sqrt(n)) count++;
            else count += 2;
        }
    }
    
    return count;
}

function solution(n) {
    let arr = [];
    for (let i = 3; i <= n; i++) {
        arr.push(i);
    }
    
    return arr.filter(num => countDiv(num) >= 3).length; 
}