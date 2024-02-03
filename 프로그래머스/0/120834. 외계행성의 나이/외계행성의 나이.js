function solution(age) {
    const alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',
                 'q','r','s','t','u','v','w','x','y','z'];
    let arr = [];
    
    while (age > 0) {
        arr.unshift(age % 10); 
        age = Math.floor(age / 10);
    }
    
    return arr.map(str => alp[str]).join('');
}