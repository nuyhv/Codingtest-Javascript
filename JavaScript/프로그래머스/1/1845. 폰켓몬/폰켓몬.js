function solution(nums) {
    const deduplication = new Set(nums);
    const maxSelect = nums.length / 2

    console.log(deduplication)
    return Math.min(deduplication.size, maxSelect)
}