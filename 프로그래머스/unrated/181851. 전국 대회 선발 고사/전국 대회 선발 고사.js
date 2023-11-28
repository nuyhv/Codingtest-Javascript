function solution(rank, attendance) {
    const top3 = rank.filter((el, i) => attendance[i] ? el : null).sort((x, y) => x - y).slice(0, 3);
    const a = rank.indexOf(top3[0]);
    const b = rank.indexOf(top3[1]);
    const c = rank.indexOf(top3[2]);
    return 10000 * a + 100 * b + c;
}