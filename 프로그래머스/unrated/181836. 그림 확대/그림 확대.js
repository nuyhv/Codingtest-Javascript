function solution(picture, k) {
    let answer = [];
    const expand = (el) => el.split('').map(pixel => pixel.repeat(k)).join('');
    
    for (const el of picture) {
        for (let i = 0; i < k; i++) {
            answer.push(expand(el));
        }
    }
    return answer;
}