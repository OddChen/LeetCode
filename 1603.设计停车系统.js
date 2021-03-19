/**
 * 请你给一个停车场设计一个停车系统。
 * 停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。
 * 请你实现 ParkingSystem 类：
 * ParkingSystem(int big, int medium, int small) 初始化 ParkingSystem 类，三个参数分别对应每种停车位的数目。
 * bool addCar(int carType) 检查是否有 carType 对应的停车位。
 * carType 有三种类型：大，中，小，分别用数字 1， 2 和 3 表示。
 * 一辆车只能停在  carType 对应尺寸的停车位中。
 * 如果没有空车位，请返回 false ，否则将该车停入车位并返回 true 。
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  //停车位数目
  this.carType = {
    1: big,
    2: medium,
    3: small,
  }
}

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.carType[carType]) {
    this.carType[carType]--
    return true
  }
  return false
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

// 自己写的
var ParkingSystem = function (big, medium, small) {
  //停车位数目
  this.big = big
  this.medium = medium
  this.small = small
}

ParkingSystem.prototype.addCar = function (carType) {
  //console.log(this.big, this.medium, this.small, carType)
  switch (carType) {
    case 1:
      if (this.big > 0) {
        this.big--
        return true
      }
      return false
    case 2:
      if (this.medium > 0) {
        this.medium--
        return true
      }
      return false
    case 3:
      if (this.small > 0) {
        this.small--
        return true
      }
      return false
    default:
      return false
  }
}
