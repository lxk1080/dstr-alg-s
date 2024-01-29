## Data structures and algorithms - s

### 时间复杂度

定性的描述程序运行所需要的时间（定性，性质，非准确时间），用大 O 表示

<img src="./picture/01.jpg" width="40%" height="auto">

如上图所示，O(1) 为最小时间，O(n!) 为最大时间

以下示例帮忙理解：

- `O(1)` 只运行一次

<img src="./picture/02.jpg" width="40%" height="auto">

- `O(n)` 运行 n 次，取决于 n 的大小

<img src="./picture/03.jpg" width="40%" height="auto">

- `O(1) + O(n) = O(n)` n 足够大，那么 1 就可以忽略不计

<img src="./picture/04.jpg" width="40%" height="auto">

- `O(n) * O(n) = O(n^2)` 这个很好理解吧，就是平方

<img src="./picture/05.jpg" width="40%" height="auto">

- `O(logN)` logN 就是求 2 的多少次方为 n

<img src="./picture/06.jpg" width="40%" height="auto">

### 空间复杂度

描述程序运行过程中占用存储空间大小的量度，也是用大 O 表示

以下示例帮忙理解：

- `O(1)` 只有一个变量

<img src="./picture/07.jpg" width="40%" height="auto">

- `O(n)` 数组中有 n 个内存单元

<img src="./picture/08.jpg" width="40%" height="auto">

- `O(n^2)` n^2 个内存单元

<img src="./picture/09.jpg" width="40%" height="auto">

### 数据结构

1. 栈
   - 后进先出的数据结构，js 中没有栈，但可以使用 Array 实现栈的所有功能
   - 什么场景使用栈？
     - 十进制转二进制
       - <img src="./picture/10.jpg" width="40%" height="auto">
     - 有效的括号
       - <img src="./picture/11.jpg" width="40%" height="auto">
       - 代码：[有效括号.js](./src/数据结构/栈/有效括号.js)
       - 来源：[leetcode 20](https://leetcode.cn/problems/valid-parentheses/description/)
     - 函数调用堆栈
       - <img src="./picture/12.jpg" width="40%" height="auto">
       - 这个可以去看我之前的文章[《深入 js 执行上下文》](https://juejin.cn/post/7206998548343373884)


2. 队列
    - 先进先出的数据结构，js 中没有队列，同样也可以使用 Array 实现队列的所有功能
    - 什么场景使用队列？
      - 食堂排队打饭
      - js 运行的异步队列
      - 最近的请求次数
        - 在某一时刻发起请求，并以当前时刻为基准，统计前 3000ms 一共发送了多少个请求，也就是说要返回一个数字。详细题目请看：[leetcode 933](https://leetcode.cn/problems/number-of-recent-calls/description/) ，当然，题目说的未必有我的清楚
        - 代码：[请求次数.js](./src/数据结构/队列/请求次数.js)


3. 链表
    - 多个元素组成的列表，元素存储不连续，用 next 指针连在一起，在 js 中可以使用 Object 来模拟链表
    - <img src="./picture/13.jpg" width="40%" height="auto">
    - 数组和链表有啥区别？
      - 数组：连续的存储结构，增删非首尾元素时，往往需要移动元素
      - 链表：增删非首尾元素不需要移动元素，只需要更改 next 的指向即可
    - 链表数据结构模拟：[模拟链表.js](./src/数据结构/链表/模拟链表.js)
    - 做几道题：
      - 删除链表中的节点：
        - 来源：[leetcode 237](https://leetcode.cn/problems/delete-node-in-a-linked-list/description/)
        - 代码：[删除节点.js](./src/数据结构/链表/删除节点.js)
        - 思路：删除下一个节点
      - 反转链表：
        - 来源：[leetcode 206](https://leetcode.cn/problems/reverse-linked-list/)
        - 代码：[反转链表.js](./src/数据结构/链表/反转链表.js)
        - 思路：使用双指针遍历
      - 两数想加：
        - 来源：[leetcode 2](https://leetcode.cn/problems/add-two-numbers/)
        - 代码：[两数想加.js](./src/数据结构/链表/两数想加.js)
        - 思路：常规加法，注意进位问题
      - 排序链表去重：
        - 来源：[leetcode 83](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/)
        - 代码：[排序链表去重.js](./src/数据结构/链表/排序链表去重.js)
        - 思路：遍历去重
      - 判断环形链表：
        - 来源：[leetcode 141](https://leetcode.cn/problems/linked-list-cycle/)
        - 代码：[判断环形链表.js](./src/数据结构/链表/判断环形链表.js)
        - 思路：操场上跑的快的肯定会追上跑得慢的
      - 实现 `instanceOf` 方法：
        - 来源：js 原型链的原理
        - 代码：[myInstanceOf.js](./src/数据结构/链表/myInstanceOf.js)
        - 思路：顺着 A 的 `__proto__` 找，如果和 B.prototype 相等，即为 true
      - 获取 json 节点：
        - 来源：重写获取不定层级值函数
        - 代码：[根据路径获取json节点.js](./src/数据结构/链表/根据路径获取json节点.js)
        - 思路：利用类似链表遍历的结构
        - 关联代码：[生成所有json节点对应路径.js](./src/数据结构/树/生成所有json节点对应路径.js)
      - 判断回文链表：
        - 来源：[leetcode 234](https://leetcode.cn/problems/palindrome-linked-list/)
        - 代码：[判断回文链表.js](./src/数据结构/链表/判断回文链表.js)
        - 思路：第一想法是转数组对比，但是这种方法太耗时耗内存了，所以改为对链表截断后遍历对比。使用数组的时空复杂度都是 `O(n)`，使用截断遍历对比后的时间复杂度是 `O(n)`，空间复杂度是 `O(1)`，事实上，虽然时间复杂度相同，但实际运行时间也大大缩减了


4. 集合
    - 一种<span style="color: orange">无序且唯一</span>的数据结构，ES6 中有集合，就是 Set
    - 做几道题：
      - 数组交集去重：
        - 来源：[leetcode 349](https://leetcode.cn/problems/intersection-of-two-arrays/description/)
        - 代码：`return [...new Set(nums1)].filter((n) => nums2.includes(n))`
        - 思路：经典的没话说，需要注意的一点是：对数组先去重再筛选，比先筛选再去重的运行速度要快一些（因为省去了对重复值的筛选）
        - 时间复杂度(TC)：O(mn)，m 是 nums1 的长度，是 filter 的时间，n 是 nums2 的长度，是调用 includes 方法的时间
        - 空间复杂度(SC)：O(m)，m 是 nums1 扩展出的数组长度


5. 字典
    - 以<span style="color: orange">键值对</span>的形式存储<span style="color: orange">唯一值</span>的数据结构，ES6 中的字典，就是 Map
    - 做几道题：
      - 数组交集去重（与上面 Set 是同一道题）：
        - 来源：[leetcode 349](https://leetcode.cn/problems/intersection-of-two-arrays/description/)
        - 代码：[数组交集去重.js](./src/数据结构/字典/数组交集去重.js)
        - 思路：使用 Map 去重一个数组后，遍历另一个数组找相同值，找到后把值从 Map 内删除。使用这种方法对比使用 Set 方法的好处是：时间复杂度从 O(mn) 降到了 O(n)，因为不需要 includes 去做筛选了
      - 有效括号（对之前使用栈解的优化）：
        - 来源：[leetcode 20](https://leetcode.cn/problems/valid-parentheses/description/)
        - 代码：[有效括号.js](./src/数据结构/字典/有效括号.js)
        - 思路：对括号使用映射关系
        - Plus：如果有需要用到这个方法，优先使用这个版本
      - 两数之和：
        - 来源：[leetcode 1](https://leetcode.cn/problems/two-sum/description/)
        - 代码：[两数之和.js](./src/数据结构/字典/两数之和.js)
        - 思路：婚姻介绍所的套路，有的话直接牵手走人，没有就先登记
      - 无重复字符的最长子串长度：
        - 来源：[leetcode 3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/)
        - 代码：[最长子串长度.js](./src/数据结构/字典/最长子串长度.js)
        - 思路：双指针构建滑动窗口，右指针右移，遇重复就左指针右移到前重复的下一位，无重复则左指针不动，更新窗口中字符串的长度（和前长度相比取最大），而后继续右指针右移，循环往复，最后返回长度
      - 最小覆盖子串：
        - 来源：[leetcode 76](https://leetcode.cn/problems/minimum-window-substring/description/)
        - 代码：[最小覆盖子串.js](./src/数据结构/字典/最小覆盖子串.js)
        - 思路：双指针构建滑动窗口，右指针不断右移，直到窗口中包含了目标字符串的所有字符，开始左指针右移（尽量缩小窗口的长度），一直右移到窗口中不包含目标字符串的所有字符为止，再次右指针右移，循环往复，每次左指针右移之前，记录下窗口中的字符串，最后移动完成，找到长度最短的那个字符串


6. 树
    - 一种分层数据的抽象模型。js 中的没有树这个数据结构，但是树型结构很多，像 dom 树、json 树、fiber 树等等
    - <span style="color: orange">深度优先</span>遍历和<span style="color: orange">广度优先</span>遍历
      - 代码：[树的遍历.js](./src/数据结构/树/树的遍历.js)
      - 思路：
        - 深度优先：其实就是一般的遍历思维，for 循环，递归，按顺序找到值，比广度优先要简单
          <br/><img src="./picture/14.jpg" width="30%" height="auto">
        - 广度优先：相对深度优先复杂一点，要利用队列的特性，一个一个的放进去，然后先进先出
          <br/><img src="./picture/15.jpg" width="30%" height="auto">
    - 二叉树
      - 定义：树中每个节点最多只能有两个子节点（可能有一个子节点，也可能没有子节点）
      - 二叉树的先、中、后序遍历
        - 代码：[二叉树的先中后序遍历.js](./src/数据结构/树/二叉树的先中后序遍历.js)
        - 思路：使用递归，递归进去的每一个元素都是一个子根，子根也是根，所以每次递归打印出根的值，也就涵盖了所有的值
          - 先序遍历，根-左-右
            <br/><img src="./picture/16.jpg" width="30%" height="auto">
          - 中序遍历，左-根-右
            <br/><img src="./picture/17.jpg" width="30%" height="auto">
          - 后序遍历，左-右-根
            <br/><img src="./picture/18.jpg" width="30%" height="auto">
        - Plus：
          - 可以看到这个先、中、后三个字，指的就是`根`字的顺序（也就是遍历根节点的顺序）
          - 二叉树的`深度优先遍历`等同于`先序遍历`
          - 二叉树的`广度优先遍历`和普通树的广度优先遍历思路一样，可以把 left 和 right 看作 children 下的两个元素，手动加进队列即可
      - 二叉树的先、中、后序遍历（非递归版）
        - 代码：[二叉树的先中后序遍历_非递归.js](./src/数据结构/树/二叉树的先中后序遍历_非递归.js)
        - 思路：递归的执行原理就是堆栈，我们可以模拟堆栈实现
        - Plus：
          - 只要会了先、中、后序遍历，其它所有顺序遍历都是类似解法
          - 只要把实现二叉树的`广度优先遍历`的`队列`换成`栈`，`广度优先`就会变成`深度优先`
    - 做几道题：
      - 二叉树的最大深度：
        - 来源：[leetcode 104](https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/)
        - 代码：[二叉树最大深度.js](./src/数据结构/树/二叉树最大深度.js)
        - 思路：深度优先遍历的时候带上层级
      - 二叉树的最小深度：
        - 来源：[leetcode 111](https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/)
        - 代码：[二叉树最小深度.js](./src/数据结构/树/二叉树最小深度.js)
        - 思路：可以使用深度优先遍历带层级解决，但是深度优先需要遍历完所有节点才能得到最小深度，而使用广度优先遍历，由于是一层一层的遍历，只要遇到了叶子节点，那必定就是最小深度了
      - 二叉树的层序遍历：
          - 描述：就是把相同层级的节点放在一起（按层归类）
          - 来源：[leetcode 102](https://leetcode.cn/problems/binary-tree-level-order-traversal/description/)
          - 代码：[二叉树层序遍历.js](./src/数据结构/树/二叉树层序遍历.js)
          - 思路：以下两种解法，经测试没有优劣之分，看情况使用
            - 解法-1：广度优先遍历带层级，相同层级的元素，把值放在同一个数组内
            - 解法-2：广度优先遍历，给相同层级的元素计数，当相同层级的元素全部遍历出队后，再遍历下一层级的元素
      - 二叉树的中序遍历：
        - 来源：[leetcode 94](https://leetcode.cn/problems/binary-tree-inorder-traversal/description/)
        - 代码：[二叉树中序遍历.js](./src/数据结构/树/二叉树中序遍历.js)
        - 思路：就是二叉树的中序遍历，分为递归版和非递归版，这题最终用的是非递归版，经有限测试，非递归版本似乎比递归版本的运行速度要快
      - 路径之和：
        - 来源：[leetcode 112](https://coding.imooc.com/lesson/446.html#mid=36885)
        - 代码：[路径之和.js](./src/数据结构/树/路径之和.js)
        - 思路：深度优先，遍历时计算出节点的和，并在递归时传给下一层节点。由于二叉树的深度优先等同于先序遍历，所以用先序遍历非递归实现也可以，但是经过测试，发现先序遍历非递归运行速度更慢，所以最终这题还是使用深度优先遍历解决
      - 遍历 json 的所有节点并生成路径：
        - 来源：前端，可能会用到类似方法，推荐使用生成数据不包含 json 本身的（主要是包含本身没有意义，还多占用了一份空间，当然特殊情况除外）
        - 代码：[生成所有json节点对应路径.js](./src/数据结构/树/生成所有json节点对应路径.js)
        - 思路：其实就是递归，和深度优先类似
        - 关联代码：[根据路径获取json节点.js](./src/数据结构/链表/根据路径获取json节点.js)
      - 渲染树组件：
        - 来源：前端业务可能会出现
        - 代码：[codesandbox - 深度优先渲染树列表](https://codesandbox.io/p/sandbox/shen-du-you-xian-xuan-ran-shu-lie-biao-hr2njp?file=%2Fsrc%2FApp.js%3A62%2C1)
        - 思路：没啥好说的，就是递归


7. 图
    - 图是<span style="color: orange">网状结构</span>的抽象模型，是一组由<span style="color: orange">边</span>连接的<span style="color: orange">节点</span>，图可以表示任何<span style="color: orange">二元</span>关系。在 js 中是肯定没有图这个概念的，但是老规矩，可以用 Object、Array 模拟
    - 图的表示法有：邻接矩阵、邻接表、关联矩阵。。。，下面是邻接矩阵和邻接表示意图
      <br/><img src="./picture/19.jpg" width="30%" height="auto">
      <br/><img src="./picture/20.jpg" width="30%" height="auto">
    - 图的深度和广度优先遍历
      - 深度优先：尽可能深的搜索图的分支
        <br/><img src="./picture/21.jpg" width="30%" height="auto">
      - 广度优先：先访问离根节点最近的节点
        <br/><img src="./picture/22.jpg" width="30%" height="auto">
      - 思路：图的遍历与树的遍历类似，图与树的不同就在于：树是逐层向下的，没有回路，而图可能存在回路，所以关键就在于遍历的时候不要对节点重复访问即可
      - 代码：[图的遍历.js](./src/数据结构/图/图的遍历.js)
    - 做几道题
      - 有效的数字
        - 来源：[leetcode 65](https://leetcode.cn/problems/valid-number/)
        - 代码：[有效数字.js](./src/数据结构/图/有效数字.js)
        - 思路：主要就是构建一个图，然后遍历字符一步步的走，走不通直接不通过，走到最后，如果是状态 3、5、6 就通过，其它状态不通过。如下图所示，一开始都是状态 0，之后开始遍历字符，根据字符类型，走到下一个状态，如果走不通，返回 false，如果走得通就一直遍历到结束，看最终状态是否是 3、5、6 即可
          <br/><img src="./picture/23.jpg" width="50%" height="auto">
      - 太平洋大西洋水流问题
        - 来源：[leetcode 417](https://leetcode.cn/problems/pacific-atlantic-water-flow/)
        - 代码：[水流问题.js](./src/数据结构/图/水流问题.js)
        - 思路：如果位置一个个的判断的话是比较繁琐，我们使用逆向思维，把太平洋和大西洋的水分别逆流，然后取它们可逆流所到位置的交集。然后在代码实现上，通过一个位置导向其它位置主要是利用图的指向性和深度优先解决
      - 图的克隆
        - 来源：[leetcode 133](https://leetcode.cn/problems/clone-graph/description/)
        - 代码：[克隆图.js](./src/数据结构/图/克隆图.js)
        - 思路：先把深度优先或广度优先代码写出来，然后在上面做修改


8. 堆
    - 堆是一种特殊的完全二叉树
      - 完全二叉树：所有节点都被填满，如果没有填满，只缺少最右边的若干叶子节点
      - 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点
    - 在 js 中通常用数组表示堆
      <br/><img src="./picture/24.jpg" width="20%" height="auto">
    - 左侧子节点的位置：`2 * index + 1`
    - 右侧子节点的位置：`2 * index + 2`
    - 父节点的位置（只取商）：`(index - 1) / 2`
    - 第 K 个最大元素问题（元素大小排名从大到小第 K 大）
      - 这个需要知道最小堆类的实现，才能理解下面所说的含义
        <br/><img src="./picture/25.jpg" width="30%" height="auto">
    - 做几道题
      - 实现最小堆类
        - 来源：没啥来源，就是用 js 实现一个最小堆的类
        - 代码：[最小堆类.js](./src/数据结构/堆/最小堆类.js)
        - 思路：使用数组实现堆类，包含 insert、pop、peek、size 等方法
      - 数组中第 K 个最大元素
        - 来源：[leetcode 215](https://leetcode.cn/problems/kth-largest-element-in-an-array/description/)
        - 代码：[第K大元素.js](./src/数据结构/堆/第K大元素.js)
        - 思路：使用最小堆类操作，当长度大于 K 时，执行 pop 操作。时间复杂度为 `O(n * logK)`，这道题在 leetcode 上对于长度特别长的测试用例会超出时间限制，但还是姑且写在这里，重要的是利用堆的解题思路




























<br/><br/><br/>
