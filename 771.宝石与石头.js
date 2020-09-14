/**
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 
 * S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 示例 1:输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

//  【正则表达式解决】直接把J处理成正则表达式，S按照正则去split，取得length后 -1
//  split分割的长度跟分隔符个数有关, 分割后的数组长度是分隔符个数加一
//  var numJewelsInStones = function(J, S) {
//     return S.split(new RegExp('[' + J + ']')).length - 1
// };

var numJewelsInStones = function(J, S) {
    // let count = 0;
    // let type = J.split("");
    // let tone = S.split("");
    // for( let i in type){
    //     for( let j in tone){
    //         type[i]===tone[j]&&count++;
    //     }
    // }
    // return count;
    return S.split("").filter((item)=>{
        return J.split("").includes(item);
    }).length;
};