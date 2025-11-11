function solution(today, terms, privacies) {
    const term = {}
    const expired = []
    
    terms.forEach(data => {
        const [type, month] = data.split(' ');
        term[type] = month * 28;
    });
    
    const convertToDay = (y, m, d) => +y * 12 * 28 + +m * 28 + +d;
    
    for (let i = 0; i < privacies.length; i++) {
        const [date, t] = privacies[i].split(' ');
        const [y, m, d] = date.split('.');
        const [ty, tm, td] = today.split('.');
        
        if (convertToDay(+y, +m, +d) + term[t] <= convertToDay(+ty, +tm, +td)) {
            expired.push(i + 1)
        }
    }
    return expired
}