/**
 * 浅拷贝：只考虑对象类型
 */
function shallowCopy(obj) {
  if (typeof obj !== 'object') {
    return
  }

  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

/**
 * 深拷贝：不考虑内置对象和函数
 */
function deepClone(obj) {
  if (typeof obj !== 'object') {
    return
  }
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

//考虑了内置对象和函数
const isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null

function deepClone(target, map = new WeakMap()) {
  if (map.get(target)) {
    return target
  }
  // 获取当前值的构造函数：获取类型
  let constructor = target.constructor
  // 检测当前对象target是否与正则、日期格式对象匹配
  if (/^(RegExp|Data)$/i.test(constructor.name)) {
    // 创建一个新的正则/日期类的实例
    return new constructor(target)
  }
  if (isObject(target)) {
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map)
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
