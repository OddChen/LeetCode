/**
 * 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。
 * 如果当前数字是偶数，你需要把它除以2；否则，减去1。
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;
    if(num===0) return 0;
    while(num){
        if(num%2===1){
            num -= 1;
            count++;
        }else{
            num = num/2;
            count++;
        }
    }
    return count;
};

//***大佬的评论
// /2的次数应该-1,
// -1的次数应该包含最高位,
// 这题结果刚好抵消了.
// 题目意思不就是数的二进制末尾如果是1(奇)就置0如果是0(偶)就右移(/2),直至变成0,
// 所以很明显需要右移数的二进制位-1次,有几个1置0几次
// ***num>>1 表示移位运算，就是把num转换成二进制表示后所有位向后移动一位，高位补0
// var numberOfSteps  = function(num) {
//     return num > 1 ? 1 + (num % 2) + numberOfSteps( num>>1 ) : num;
// };