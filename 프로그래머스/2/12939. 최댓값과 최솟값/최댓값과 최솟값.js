function solution(s) {
    //split하고 sort 오름차순 한다음 return
    const nums = s.split(' ').sort((a, b) => a - b);
    const len = nums.length;
    
    console.log(nums)
    return `${nums[0]} ${nums[len - 1]}`;
}