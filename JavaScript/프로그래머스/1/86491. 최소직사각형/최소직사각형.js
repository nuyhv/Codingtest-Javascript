function solution(sizes) {
    let mw = 0;
    let mh = 0;

    for (const [w, h] of sizes) {
        const maxSide = Math.max(w, h);
        const minSide = Math.min(w, h);

        mw = Math.max(mw, maxSide);
        mh = Math.max(mh, minSide);
    }

    return mw * mh
}