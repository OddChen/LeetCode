/**
 * 给你一个正方形矩阵 mat，请你返回矩阵对角线元素的和。
 * 请你返回在矩阵主对角线上的元素和副对角线上且不在主对角线上元素的和。
 * 
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let len = mat.length;
    let m = len%2;
    let sum = 0;
    for(let i=0; i<len; i++){
        sum += mat[i][i]+mat[i][len-1-i];
    }
    if(m){
        sum -= mat[(len-1)/2][(len-1)/2];
    }
    return sum;
    // if(mat.length === 1) {return mat[0][0]}
    // return mat.reduce((count, v, i)=>{
    //     if(i === (v.length - 1 - i)) {return count + v[i]}
    //     return count + (v[i] + v[v.length - 1 - i])
    // }, 0)
};