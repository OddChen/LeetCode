/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newnum = nums.sort();
    for(let i = 0; i < nums.length-1; i++) {
        if(newnum[i]===newnum[i+1]){
            return true;
        }
    }
    return false;
};
/**
 * 还可用哈希表，has(nums[i])判断，没有的值存入,有已经存在的返回false
 */