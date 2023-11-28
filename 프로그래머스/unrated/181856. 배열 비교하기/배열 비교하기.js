function solution(arr1, arr2) {
    const sumEl = (array) => {
        return array.reduce((acc, cur) => acc + cur, 0);
    }
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } else {
        return sumEl(arr1) === sumEl(arr2) ? 0 :
        sumEl(arr1) > sumEl(arr2) ? 1 : -1;
    }
}