function solution(n, w, num) {
    const r = Math.floor((num - 1) / w);
    const R = Math.ceil(n / w);
    const t = n - (R - 1) * w;

    // num의 열(0부터). 짝수 행은 L→R, 홀수 행은 R→L
    const pos = (num - 1) % w;
    const c = r % 2 === 0 ? pos : w - 1 - pos;

    let ans = R - r;

    if (t > 0 && r !== R - 1) {
        const topIsEven = (R - 1) % 2 === 0;
        const topCovers =
              topIsEven ? c < t : c >= w - t;
        if (!topCovers) ans -= 1;
    }

    return ans;
}
