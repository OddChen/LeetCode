require('./队列')
require('./字典')


//邻接表表示
class Graph {
  constructor() {
    this.vertexes = [] //顶点
    this.edges = new Dictionary() //边
  }

  //添加
  addVertex = (v) => {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }
  addEdge = (v1, v2) => { //无向图
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }

  //toString()
  toString = () => {
    let resultString = ''
    //遍历顶点和边
    for (let i = 0; i < this.vertexes.length; i++) {
      resultString += this.vertexes[i] + '->'
      let vEdges = this.edges.get(this.vertexes[i])
      for(let j = 0; j < vEdges.length; j++) {
        resultString += vEdges[j] + ''
      }
      resultString += '\n'
    }
    return resultString
  }

  //图的遍历
  initialzeColor = () => {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }
  //广度优先搜索(Breadth-First Search, 简称BFS)
  bfs = (initV) => {
    let color = this.initialzeColor()
    //创建队列
    let queue = new Queue()
    queue.enqueue(initV)
    //循环从队列中取出元素
    let result = []
    while (!queue.isEmpty()) {
      let v = queue.dequeue()
      let vList = this.edges.get(v)
      colors[v] = 'gray'
      //遍历顶点
      for (let i = 0; i < vList.length; i++) {
        let e = vList[i]
        if (colors[e] === 'white') {
          queue.enqueue(e)
        }
      }
      result.push(v)
      color[v] = 'black'
    }
    return result
  }
  //深度优先搜索(Depth-First Search, 简称DFS)
  dfs = (initV) => {
    let result = []
    let color = this.initialzeColor()
    this.dfsVisit(initV, color, result)
    return result
  }
  dfsVisit = (v, colors, result) => {
    colors[v] = 'gray'
    let vList = this.edges.get(v)
    for (let i = 0; i < vList.length; i++) {
      let e = vList[i]
      if (colors[e] === 'white') {
        this.dfsVisit(e, colors, result)
      }
    }
    result.push(v)
    colors[v] = 'black'
  }
}