function solution(word) {
    const dic = ['A', 'E', 'I', 'O', 'U'];
    const value = [781, 156, 31, 6, 1];

    let pos = 0;

    for (let i = 0; i < word.length; i++) {
        const index = dic.indexOf(word[i]);
        pos += value[i] * index + 1;
    }

    return pos;
}