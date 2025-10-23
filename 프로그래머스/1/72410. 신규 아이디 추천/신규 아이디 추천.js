function solution(new_id) {
    let lowerStr = new_id.toLowerCase()

    lowerStr = lowerStr.replace(/[^a-z0-9-_.]/g, '')

    lowerStr = lowerStr.replace(/\.{2,}/g, '.')

    lowerStr = lowerStr.replace(/^\.|\.$/g, '');

    if (lowerStr === '') {
        lowerStr = 'a';
    }

    if (lowerStr.length >= 16) {
        lowerStr = lowerStr.slice(0, 15);
        lowerStr = lowerStr.replace(/\.$/, '');
    }

    while (lowerStr.length <= 2) {
        lowerStr += lowerStr[lowerStr.length - 1];
    }

    return lowerStr
}