function solution(nums) {
    const deduplication = new Set(nums);
    const maxSelect = nums.length / 2;

    return Math.min(deduplication.size, maxSelect);
}