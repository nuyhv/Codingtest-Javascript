function solution(n, arr1, arr2) {
    var answer = [];
    
    arr1 = arr1.map(num => '0'.repeat(n - num.toString(2).length) + num.toString(2));
    arr2 = arr2.map(num => '0'.repeat(n - num.toString(2).length) + num.toString(2));
    
    answer = arr1.map((n, i) => {
        let str = '';
        for (let j = 0; j < n.length; j++) {
            if (n[j] === '0' && arr2[i][j] === '0') {
                str += ' ';
            } else {
                str += '#';
            }
        }
        return str;
    });
    
    return answer
}