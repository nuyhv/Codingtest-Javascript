function solution(rsp) {
    return [...rsp].map(str => {
        switch (str) {
            case '2': return '0';
            case '0': return '5';
            case '5': return '2';
        }
    }).join('');
}