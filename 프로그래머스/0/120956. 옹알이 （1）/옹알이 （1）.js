function solution(babbling) {
    const word = ['aya', 'ye', 'woo', 'ma'];

    return babbling.map((str) => {
        for (const w of word) {
            if (str.includes(w)) {
                str = str.replace(w, ' ');
            }
        }
        return str;
    }).filter((str) => !str.trim()).length;
}