function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    const q = [[0, 0, 1]]; 
    maps[0][0] = 0; 
    
    while (q.length) {
        const [curX, curY, dist] = q.shift();
        
        if (curX === row - 1 && curY === col - 1) return dist; 
        
        for (let i = 0; i < 4; i++) {
            const x = curX + dx[i];
            const y = curY + dy[i];
            
            if (x >= 0 && x < row && y >= 0 && y < col && maps[x][y] === 1) { 
                q.push([x, y, dist + 1]);
                maps[x][y] = 0;
            }
        }
    }
    
    return -1
}
