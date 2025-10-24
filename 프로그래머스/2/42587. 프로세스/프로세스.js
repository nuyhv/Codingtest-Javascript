function solution(priorities, location) {
    let answer = 0
    const queue = priorities.map((priority, idx) => ({priority, idx}));
    
    while (queue.length > 0) {
        const cur = queue.shift();
        
        if (queue.some(el => el.priority > cur.priority)) queue.push(cur);
        else {
            answer++;
            if (cur.idx === location) break;
        }
    }
    
    return answer;
}
