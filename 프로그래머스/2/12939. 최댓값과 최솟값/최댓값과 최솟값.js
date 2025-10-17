function solution(s) {
    const nums = s.split(' ').sort((a, b) => a - b)
    const len = nums.length;
    
    console.log(nums)
    return `${nums[0]} ${nums[len - 1]}`;
}