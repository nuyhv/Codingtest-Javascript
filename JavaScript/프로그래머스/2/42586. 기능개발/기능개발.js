function solution(progresses, speeds) {
    const answer = [];
    let days = 0;
    let count = 0;

    while (progresses.length > 0) {
        if (progresses[0] + speeds[0] * days >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        } else {
            if (count > 0) {
                answer.push(count);
                count = 0;
            }
            days++;
        }
    }

    if (count > 0) {
        answer.push(count);
    }

    return answer
}