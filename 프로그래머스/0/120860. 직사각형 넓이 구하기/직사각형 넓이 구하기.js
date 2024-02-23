function solution(dots) {
    const xs = dots.map(dot => dot[0]);
    const ys = dots.map(dot => dot[1]);

    const w = Math.max(...xs) - Math.min(...xs);
    const h = Math.max(...ys) - Math.min(...ys);
    
    return w * h;
}