function solution(my_string) {
    var answer = new Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const charCode = my_string.charCodeAt(i);

        if (65 <= charCode && charCode <= 90) answer[charCode - 65]++;
        else if (97 <= charCode && charCode <= 122) answer[charCode - 71]++;
    }

    return answer;
}