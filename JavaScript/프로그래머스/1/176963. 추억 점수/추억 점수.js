function solution(name, yearning, photo) {
    let ans = []
    
    for (const people of photo) {
        let score = 0;
        
        for (const person of people) {
            const idx = name.indexOf(person)
            
            if (idx !== -1) score += yearning[idx]
        }
        ans.push(score)
    }
    
    console.log(name, yearning, photo, ans)
    return ans;
}