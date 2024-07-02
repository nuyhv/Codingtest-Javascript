function solution(tickets) {
    var answer = [];
    const len = tickets.length;
    const visited = Array(len).fill(false);
    
    const dfs = (routes) => {
        if (routes.length === len + 1) answer.push(routes);
        
        for (const i in tickets) {
            const [start, end] = tickets[i];
            if (!visited[i]) {
                if (routes.at(-1) === start) {
                    visited[i] = true;
                    dfs([...routes, end]);
                    visited[i] = false;
                }
            }
        }
    }
    
    dfs(['ICN']);
    
    return answer.sort()[0];
}