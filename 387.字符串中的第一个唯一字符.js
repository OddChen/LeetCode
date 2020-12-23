/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  if(!s.length) return -1;
  let p = new Map();
  for(let i=0; i<s.length; i++){
      if(!p.has(s[i])){
          p.set(s[i],i);
      }else{
          p.set(s[i],-1);
      }
  }
  // console.log(p)
  let arr = Array.from(p.values());
  console.log(arr);
  for(let i=0; i<arr.length; i++){
      if(arr[i]!==-1){
          return arr[i];
      };
  }
  return -1;
};