/**
 * @desc json 数据
 */
const json = {
  a: { b: { c: { d: 1 }}},
  e: [1, 2, { f: 3 }, { g: { h: 4 }}],
  i: { j: true, k: null },
}

/**
 * @desc 获取 json 的所有节点以及对应路径（包含 json 本身）
 */
const generateJsonFlatSelf = (data) => {
  const res = []
  const deepJSON = (val, path) => {
    res.push({ val, path })
    if (!val || typeof val !== 'object') return
    Object.keys(val).forEach((key) => {
      deepJSON(val[key], [...path, key])
    })
  }
  deepJSON(data, [])
  return res
}

/**
 * @desc 获取 json 下的所有节点以及对应路径（不包含 json 本身，推荐！）
 */
const generateJsonFlat = (data) => {
  const res = []
  const deepJSON = (node, lastPath) => {
    if (!node || typeof node !== 'object') return
    Object.keys(node).forEach((key) => {
      const val = node[key]
      const path = [...lastPath, key]
      res.push({ val, path })
      deepJSON(val, path)
    })
  }
  deepJSON(data, [])
  return res
}

/**
 * @desc 测试代码
 */

// 包含 json 本身
// console.log(generateJsonFlatSelf(json))

// 不包含 json 本身，推荐！
console.log(generateJsonFlat(json))
