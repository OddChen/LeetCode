/**
 * 一维数组的动态和
 * 给你一个数组nums。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((prev, curr, index)=>{
        nums[index]= curr + prev;
        return nums[index];
    })
    return nums;
};