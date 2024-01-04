function solution(dartResult) {
    let arr = [];
    let temp = 0;

    for (let i = 0; i < dartResult.length; i++) {
        const el = dartResult[i];
        const nextEl = dartResult[i + 1];
        
        if (!isNaN(Number(el))) {
            // el이 숫자인 경우
            if (el === '1' && nextEl === '0') {
                temp = 10;
                i++;
            } else {
                temp = Number(el);
            }
        } else {
            // el이 문자인 경우
            switch (el) {
                case 'S': arr.push(temp); break;
                case 'D': arr.push(Math.pow(temp, 2)); break;
                case 'T': arr.push(Math.pow(temp, 3)); break;
                case '*': {
                    arr[arr.length - 1] *= 2;
                    if (arr.length > 1) {
                        arr[arr.length - 2] *= 2;
                    }
                    break;
                }
                case '#': arr[arr.length - 1] *= -1; break;
            }
        }
    }
    console.log(arr, temp);
    return arr.reduce((acc, cur) => acc + cur);
}