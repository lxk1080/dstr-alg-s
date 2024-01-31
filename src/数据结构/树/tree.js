/**
 * @desc 一般树的数据
 */
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [
            {
              val: 'h',
              children: [],
            },
            {
              val: 'i',
              children: [],
            }
          ],
        },
        {
          val: 'e',
          children: [
            {
              val: 'j',
              children: [],
            },
            {
              val: 'k',
              children: [],
            }
          ],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    }
  ],
}

/**
 * @desc 二叉树数据
 */
const binaryTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  }
}

module.exports = {
  tree,
  binaryTree,
}
