/**
 * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
 * （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let arr = N.toString().split("");
    // console.log(arr);
    if(N<10) return N;
    for(let i = arr.length-1; i > 0; i--) {
        if(arr[i]<arr[i-1]){
            arr[i-1]=arr[i-1]-1;
            for(let j = i ; j <= arr.length-1; j++){ arr[j] = 9;}
        }
    }
    // console.log(arr.join(""));
    return arr.join("");
};
/**
 * 倒着遍历，a[i-1]>a[i]时，a[i-1]--，a[i]之后的置为9
 * 
 * 正序是a[i]>a[i+1]时进行操作，需要考虑a[i]--后小于a[i-1]的情况，
 * 例如：233332   倒数第二个3->2后<3
 * 解决思路：该情况下必有a[i-1]=a[i]，需要提前记录最大值MAX，仅当MAX<arr[i]的时候更新MAX的下标idx
 * 当a[i]>a[i+1]时，idx对应位置的数字-1，后面的值置为9
 */