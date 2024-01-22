/**
 * @desc
 *  - 就是保持只有一个队列，然后根据条件先进先出
 *  - 这里主要是巧妙地运用了 while 的特性，一直运行到符合条件为止，以后有这种不确定需要循环几次的场景，要多想想 while 是否可以解决问题
 *  - 最后返回队列的长度即可
 *  - 时间复杂度：O(n)，这个 n 就是队列的长度
 *  - 空间复杂度：O(n)，同上
 * @leetcode 933
 */

const RecentCounter = function() {
  this.queue = []
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.queue.push(t)
  while(this.queue[0] < t - 3000) {
    this.queue.shift()
  }
  return this.queue.length
}
