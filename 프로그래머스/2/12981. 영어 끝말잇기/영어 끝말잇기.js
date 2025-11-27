function solution(n, words) {
    const usedWords = new Set()
    let prevWord = ""

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (
            (prevWord && prevWord[prevWord.length - 1] !== word[0]) || 
            usedWords.has(word)
        ) {
            const turn = Math.floor(i / n) + 1; 
            const player = (i % n) + 1; 
            return [player, turn];
        }

        usedWords.add(word);
        prevWord = word; 
    }
    
    return [0, 0]
}