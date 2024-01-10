function solution(phone_number) {
    const len = phone_number.length;
    const lastNum = phone_number.slice(len - 4);
    
    return '*'.repeat(len - 4) + lastNum;
}