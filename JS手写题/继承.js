/**
 * 原型链继承
 * 问题：1、原型中包含的引用类型属性将被所有实例共享；2、子类在实例化的时候不能给父类构造函数传参
 */
function Animal() {
  this.colors = ['black', 'white']
}
Animal.prototype.getColor = () => {
  return this.colors
}
function Dog() {}
Dog.prototype = new Animal()

let dog1 = new Dog()
dog1.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors) // ['black', 'white', 'brown']

/**
 * 借用构造函数实现继承
 * 由于方法必须定义在构造函数中，导致每次创建子类实例都会创建一遍方法
 */
function Animal(name) {
  this.name = name
  this.getName = function () {
    return this.name
  }
}
function Dog(name) {
  Animal.call(this, name)
}
Dog.prototype = new Animal()

/**
 * 组合继承
 * 使用原型链继承原型上的属性和方法，通过构造函数继承实例属性
 */
function Animal(name) {
  this.name = name
  this.colors = ['black', 'white']
}
Animal.prototype.getName = () => {
  return this.name
}
function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let dog1 = new Dog('狗1', 1)
dog1.colors.push('brown')
let dog2 = new Dog('狗2', 2)
console.log(dog2) //{name: '狗2', colors: ['black', 'white'], age: 2}

/**
 * 寄生式组合继承
 * 不直接调用父类构造函数给子类原型赋值 通过创建空函数获取父类原型副本
 */
function Animal(name) {
  this.name = name
  this.colors = ['black', 'white']
}
Animal.prototype.getName = () => {
  return this.name
}
function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

let dog1 = new Dog('狗1', 1)
dog1.colors.push('brown')
let dog2 = new Dog('狗2', 2)
console.log(dog2) //{name: '狗2', colors: ['black', 'white'], age: 2}

/**
 * class实现继承
 */
class Animal {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
