function solution(participant, completion) {
    const list = new Map();

    for (const name of participant) {
        list.set(name, (list.get(name) || 0) + 1);
    }

    for (const name of completion) {
        const count = list.get(name);
        if (count === 1) {
            list.delete(name);
        } else {
            list.set(name, count - 1);
        }
    }
    const answer = [...list.keys()].toString();
    
    return answer
}