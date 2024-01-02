function solution(lottos, win_nums) {
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);
    let nums = [];
    
    for (const num of lottos) {
        if (num !== 0) {
            if (win_nums.includes(num)) nums.push(num);
        } else nums.push(num);
    }
    // max는 배열 다세고 min은 0 빼고 셈
    const max = nums.length;
    const min = nums.filter(num => num !== 0).length;
    
    const getPrice = (num) => {
        switch (num) {
            case 2: return 5;
            case 3: return 4;
            case 4: return 3;
            case 5: return 2;
            case 6: return 1;
            default: return 6;
        }
    }
    
    return [getPrice(max), getPrice(min)];
}