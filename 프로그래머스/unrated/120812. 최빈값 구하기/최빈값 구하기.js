function solution(array) {
    const frequencyMap = new Map();

    for (const num of array) {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }
    
    let maxFrequency = 0;
    let mode = -1;

    for (const [num, frequency] of frequencyMap) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mode = num;
        } else if (frequency === maxFrequency) {
            mode = -1;
        }
    }

    return mode;
}