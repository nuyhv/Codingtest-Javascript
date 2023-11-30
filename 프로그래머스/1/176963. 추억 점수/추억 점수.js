function solution(name, yearning, photo) {
    let result = [];
    
    for (const people of photo) {
        let score = 0;
        
        for (const person of people) {
            const idx = name.indexOf(person);
            
            if (idx !== -1) score += yearning[idx];
        }
        result.push(score);
    }
    
    return result;
}