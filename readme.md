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
     - 函数调用堆栈
       - <img src="./picture/12.jpg" width="40%" height="auto">





  
  
  
  
  
  






<br/><br/><br/>
