function solution(num_list) {
    let count = 0;
    const divideToOne = (num) => {
        while (num !== 1) {
            num % 2 === 0 ? num = num / 2 : num = (num - 1) / 2;
            count++;
        }
        return num;
    }
    
    for (const num of num_list) {
        divideToOne(num);
    }
    
    return count;
}