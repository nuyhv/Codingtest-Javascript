function solution(park, routes) {
    let start = []
    for (let i = 0; i < park.length; i++) {
        if (park[i].includes('S')) {
            start = [i, park[i].indexOf('S')];
            break;
        }
    }

    function isMoveable(row, col) {
        return row >= 0 && row < park.length && col >= 0 && col < park[0].length && park[row][col] !== 'X';
    }

    const direction = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1],
    };

    for (const route of routes) {
        const [op, n] = route.split(' ');
        const [dr, dc] = direction[op]; 
        let [row, col] = start;

        let validMove = true;

        for (let i = 0; i < n; i++) {
            row += dr;
            col += dc;

            if (!isMoveable(row, col)) {
                validMove = false;
                break;
            }
        }

        if (validMove) start = [row, col];
    }

    return start;
}