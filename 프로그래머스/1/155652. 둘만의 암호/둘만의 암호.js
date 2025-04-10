function solution(s, skip, index) {
    const ans = [...'abcdefghijklmnopqrstuvwxyz'].filter(str => ![...skip].includes(str));

    return [...s].map(el => {
        const strIdx = ans.indexOf(el);
        return strIdx !== -1 ? ans[(strIdx + index) % ans.length] : el;
    }).join('');
}