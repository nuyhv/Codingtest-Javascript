function solution(lines) {
    let arr = new Array(200).fill(0);
    
    for (const line of lines) {
        const [start, end] = line;
        
        for (let i = start; i < end; i++) {
            arr[i + 100] ++;
        }
    }
    
    return arr.filter(el => el > 1).length;
}