/**
 * 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。
 * 请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var newnums = [];
    for (let i = 0; i < n; i++){
        newnums.splice(i*2, 0, nums[i],nums[i+n]);
        // newnums[i*2]=nums[i];
        // newnums[i*2+1]=nums[n+i];
    }
    return newnums;
};