function solution(number, limit, power) {
    let arr = [];
    const countDiv = (num) => {
        let count = 0;
        
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
            if (num / i === i) {
                count++;
            } else {
                count += 2;
            }
        }
        }
        
        return count;
    }
    for (let j = 1; j <= number; j++) {
        const divCount = countDiv(j);
        arr.push(divCount <= limit ? divCount : power);
    }
    
    return arr.reduce((acc, cur) => acc + cur);
}