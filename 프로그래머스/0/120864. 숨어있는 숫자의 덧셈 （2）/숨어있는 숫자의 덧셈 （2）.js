function solution(my_string) {
    let sum = 0; 
    let curNum = ''; 

    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        
        if (!isNaN(char)) {
            curNum += char; 
        } else {
            if (curNum !== '') {
                sum += parseInt(curNum); 
                curNum = ''; 
            }
        }
    }  
    
    if (curNum !== '') sum += parseInt(curNum);

    return sum;
}