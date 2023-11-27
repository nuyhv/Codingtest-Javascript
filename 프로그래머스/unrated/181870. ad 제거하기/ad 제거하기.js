function solution(strArr) {
    return strArr.filter((el, _) => el.includes('ad') ? null : el);
}