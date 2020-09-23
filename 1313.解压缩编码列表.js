/**
 * 给你一个以行程长度编码压缩的整数列表 nums 。
 * 考虑每对相邻的两个元素 [freq, val] = [nums[2*i], nums[2*i+1]]（其中 i >= 0 ），
 * 每一对都表示解压后子列表中有 freq 个值为 val 的元素，你需要从左到右连接所有子列表以生成解压后的列表。
 * 请你返回解压后的列表。
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let list = [];
    for(let i=0; i<nums.length; i+=2){
        for(let j=0; j<nums[i]; j++){
            list.push(nums[i+1]);
        }
    }
    return list;
};

/**
 * 还可用arr.fill(value, start, end)
 * 将value从start位置开始插入，到end位置结束
 */