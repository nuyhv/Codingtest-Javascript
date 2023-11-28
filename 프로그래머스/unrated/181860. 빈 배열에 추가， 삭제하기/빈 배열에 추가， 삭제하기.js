function solution(arr, flag) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            answer.push(...Array(arr[i] * 2).fill(arr[i]));
        } else {
            for (let j = 0; j < arr[i]; j++) {
                if (answer.length > 0) {
                    answer.pop();
                }
            }
        }
    }
    
    return answer;
}