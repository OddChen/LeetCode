/**
 * 给你一个整数数组nums 。
 * 如果一组数字(i,j)满足 nums[i] == nums[j] 且 i < j,就可以认为这是一组好数对 。
 * 返回好数对的数目。
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    let len = nums.length;
    for (let i=0; i<len; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i]==nums[j]){
                count++;
            }
        }
    }
    return count;
};