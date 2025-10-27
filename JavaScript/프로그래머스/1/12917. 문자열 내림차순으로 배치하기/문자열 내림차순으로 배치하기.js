function solution(s) {
    return [...s].sort((a, b) => a.charCodeAt(0) < b.charCodeAt(0) ? 1 : -1).join('')
}