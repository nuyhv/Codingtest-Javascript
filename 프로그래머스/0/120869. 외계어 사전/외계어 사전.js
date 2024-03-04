function solution(spell, dic) {
    for (const str of dic) {
        let found = true;
        for (const char of spell) {
            if (!str.includes(char)) {
                found = false;
                break;
            }
        }
        if (found) return 1;
    }
    return 2;
}