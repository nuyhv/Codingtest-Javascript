function solution(want, number, discount) {
    let wants = {}
    for (let i = 0; i < want.length; i++) {
        wants[want[i]] = number[i];
    }

    let numDays = 10;
    let totalDays = discount.length;
    let count = 0;

    for (let i = 0; i <= totalDays - numDays; i++) {
        let window = discount.slice(i, i + numDays);
        let windowMap = {};

        for (let item of window) {
            if (windowMap[item]) windowMap[item]++;
            else windowMap[item] = 1;
        }

        let isMatch = true;
        for (let item in wants) {
            if (!windowMap[item] || windowMap[item] < wants[item]) {
                isMatch = false;
                break;
            }
        }

        if (isMatch) count++
    }

    return count
}