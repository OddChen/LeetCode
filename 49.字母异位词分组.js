/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let newlist = {};
    sortlist = (str) => {return str.split("").sort().join("");} 
    for(let i=0; i<strs.length; i++){
        let key = sortlist(strs[i]);
        if(newlist[key]){
            newlist[key].push(strs[i]);
        }else{
            newlist[key] = [strs[i]];
        }
    }
    return Object.values(newlist);
};
/**
 * 解析：
 * 由于互为字母异位词的两个字符串包含的字母相同，因此对两个字符串分别进行排序之后得到的字符串一定是相同的，
 * 故可以将排序之后的字符串作为哈希表的键。
 * 哈希表：键值对，key可以为string
 */