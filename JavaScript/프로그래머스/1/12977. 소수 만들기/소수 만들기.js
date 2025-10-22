function solution(nums) {
    let count = 0
    let arr = []
    
    const isPrime = (n) => {
        if (n === 1) return false;
        
        for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
            if (n % i === 0) return false;
        }
        
        return true;
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                arr.push(sum);
            }
        }
    }
    
    for (const num of arr) {
        if (isPrime(num)) count++;
    }
    
    return count
}