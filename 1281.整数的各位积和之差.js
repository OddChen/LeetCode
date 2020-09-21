/**
 * 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
 * 
 * js和c对取模的操作并不同，n/10的结果是有小数点的，所以需要使用到Math.floor(x)方法，取小于x的整数。
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let multi = 1;
    let sum = 0;
    let x;
    do{
        x = n%10;
        multi *= x;
        sum += x;
        //n /= 10; In js is wrong! amz!!!
        n = Math.floor(n/10);
    } while(n!==0);
    return multi-sum;
};