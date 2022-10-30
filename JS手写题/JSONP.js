/**
 * 原理：script标签不受同源策略约束，所以可以用来进行跨域请求
 * 兼容性好，但是只能用于GET请求
 */
const jsonp = ({ url, params, callbackName }) => {}
