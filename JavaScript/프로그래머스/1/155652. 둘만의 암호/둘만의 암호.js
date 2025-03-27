function solution(s, skip, index) {
    const str = [...'abcdefghijklmnopqrstuvwxyz'].filter(str => ![...skip].includes(str));

    return [...s].map(el => {
        const strIdx = str.indexOf(el);
        return strIdx !== -1 ? str[(strIdx + index) % str.length] : el;
    }).join('');
}