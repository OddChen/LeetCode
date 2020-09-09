/**
 * 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。
 * 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    //solution 1.
    // let m = s.split("");
    // let x = m.slice(0,n);
    // return m.concat(x).slice(n).join("");

    //solution 2.
    // return s.concat(s.slice(0,n)).substr(n);

    //solution 3.
    return s.slice(n)+s.slice(0,n);

    //other solution
    //反转前N位=>反转其余的=>反转整个
};