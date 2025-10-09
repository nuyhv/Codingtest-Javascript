function solution(wallpaper) {
    const rows = wallpaper.length
    const cols = wallpaper[0].length

    let lux = Infinity, luy = Infinity;
    let rdx = -1, rdy = -1;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (wallpaper[i][j] === '#') {
                lux = Math.min(lux, j);
                luy = Math.min(luy, i);
                rdx = Math.max(rdx, j + 1);
                rdy = Math.max(rdy, i + 1);
            }
        }
    }

    return [luy, lux, rdy, rdx]
}