function solution(id_pw, db) {
    const userdb = new Map();
    
    for (const el of db) {
        const [id, pw] = el;
        userdb.set(id, pw);
    }
    
    if (!userdb.get(id_pw[0])) return 'fail';
    else return userdb.get(id_pw[0]) === id_pw[1] ? 'login' : 'wrong pw';
}