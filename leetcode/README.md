### leecode

类别(算法,数据库,shell)
难度(a简单, b中等, c困难)

|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|412|Fizz Buzz|py2/js|a|Array.from|
|189|旋转数组|js|a|Array.splice/slice/unshift|
|342|4的幂|py2|a|--|
|66|加一|py2|a|操作list|
|13|罗马数字转整数|py2|a|字典|
|371|两整数之和|py2|a|--|
|67|二进制求和|py2|a|--|
|415|字符串相加|py2|a|--|
|43|字符串相乘|py2|b|--|
|989|数组形式的整数加法|py2|a|--|
|69|x的平方根|py2|a|牛顿迭代法|
|507|完美数|py2|a|欧几里得-欧拉定理|
|1137（147周赛）|[第 N 个泰波那契数](https://leetcode-cn.com/problems/n-th-tribonacci-number/)|py2|a|迭代|
|119|杨辉三角|py2|a|迭代|
|54|旋转矩阵|py2\题解|b|操作数组|
|56|合并区间|py2|b|排序+迭代|
|57|插入区间|py2|c|排序+迭代|
|217|存在重复元素|py2|a|查重|
|+401|二进制手表|py2|a|--未完成--|
|977|有序数组的平方|py2|a|双指针|
|88|合并两个有序数组|py2|a|双指针|
|70|矩阵置零|py2|b|遍历|
|1094（142周赛）| 拼车 |py2|b|乘车问题|
|78| 子集 |py2|b|组合|
|551| 学生出勤记录I | py2 | a | 内置函数 |
|121| 买卖股票的最佳时机 | py | a | -- |
|976| 三角形的最大周长 | py2 | a | -- |
|58| 最后一个单词的长度 | js | a | Array.split(reg) |
|151| 翻转字符串里的单词 | js | b | Array.reverse |
|819| 最常见的单词 | js | a | Map |

#### 排序/查找


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|75|颜色分类|py2|b|冒泡排序|
|179|最大数|py2|b|冒泡排序|
|177| 第N高的薪水|sql|b|DESC LIMIT|
|561| [数组拆分I](<https://leetcode-cn.com/problems/array-partition-i/>) |py2|a|冒泡排序会超时，推荐sort\sorted|
|4| 寻找两个有序数组的中位数 |py2|c|sort|
|665| [非递减数列](https://leetcode-cn.com/problems/non-decreasing-array/) |py2|a|移除间断点|
|33| 搜索旋转排序数组 |py2|b|二分法搜索|
|81（147周赛精选）| 搜索旋转排序数组ii |py2|b|二分法搜索|
|448| 找到所有数组中消失的数字 |py2|a|超时，元素转索引|
|442| 数组中重复的数据 |py2|b|元素转索引|
|880|索引处的解码字符串|py2|b|逆向思维|
|440(158周赛精选)|字典序的第k小数字|py2|c|字典序|



#### 分治法+动态规划+贪心法+回溯法+支限界法


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|509|斐波那契数(数列)|py2+md|a|动态规划|
|62|不同路径|py2|b|动态规划|
|70| 爬楼梯 |py2|a|动态规划|
|746| 使用最小花费爬楼梯 |py2|a|动态规划|
|198| 打家劫舍 |py2|a|动态规划|
|740| 删除与获得点数(打家劫舍) |py2|b|动态规划|
|53| 最大子序列 |py2|a|动态规划|
|152| 乘积最大子序列 |py2|b|动态规划|
|322| 零钱兑换 |py2|b|动态规划|
|377| 组合总和IV |py2|b|动态规划|
|552| 学生出勤记录II | -- | c | 组合问题-动态规划 |
|39| 组合总和 |py2|b|回溯算法|
|40| 组合总和II |py2|b|回溯算法|
|216| 组合总和III ||||


#### 其他数据结构


|#|题目|语言|难度|注释|
|:-|:-:|:-:|:-:|:-:|
|--| ---------------链表----------- |--|--|--|
|237| 删除链表中的节点 |py2|a|链表删除|
|2| 两数相加 |py2|b|链表合并|
|445| 两数相加II |py2|b||
|treenode| --------------二叉树--------- |--|--|--|
|965| 单值二叉树 |py2|a|创建二叉树|
|101| 对称二叉树 |py2|a|遍历二叉树|
|102| 二叉树的层序遍历 |py2|b|层序遍历|
|107|  ||||
|637| [二叉树的层平均值](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/) |py2|a|层序遍历|
|110| 平衡二叉树 |py2|a|DFS|
|662| 二叉树最大宽度 |py2|b|DFS(一些节点为空)，creatTree不适用|
|226| 翻转二叉树 |py2|a|遍历二叉树|
|617| 合并二叉树 |py2|a|遍历二叉树|
|1184(153周赛)| 公交站间的距离 |py2|a|--|
|1185(153周赛)| 一周中的第几天 |py2|a|Zeller公式：w=([c/4]-2c+y+[y/4]+[13(m+1)/5]+d-1)mod7<br />注：1582-10-15之后|
|1186| 删除一次得到子数组最大和 ||b||
|1187| 使数组严格递增 ||c||



### 统计

- 平均值
- 中位数
- 众数

## 数组

字典序： ....

- 二分法搜索(长度大于1)

```
function bs(nums, target, start_index, end_index) {
  while(start_index <= end_index) {
    mid_index = (start_index+end_index) / 2
    cur_num = nums[mid_index]
    if (target == cur_num) {
      return mid_index
    } else if (target < cur_num) {
      end_index = mid_index - 1
    } else {
      start_index = mid_index + 1
    }
  }
  return -1
}

=======================递归写法==============================
function bs(nums, target, start_index, end_index) {
  if(start_index > end_index) {
    return -1
  }
  mid_index = (start_index+end_index) / 2
  cur_num = nums[mid_index]
  if (target == cur_num) {
    return mid_index
  } else if (target < cur_num) {
    return bs(nums, target, start_index, mid_index - 1)
  } else {
    return bs(nums, target, mid_index + 1, end_index)
  }
}

```

动态规划：

1. 状态
2. 状态转移方程



## 链表

链表, 线性数据结构。相比数组, 元素不存储在相邻位置， 通指针链接。

优势：

1. 元素个数无上限。
2. 插入/删除元素， 无需创建空间， 无需移动插入位置以后的元素。

```py
====================单链表======================
# Definition for singly-linked list.
class listNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None
    
def creatLinkedList(data, index):
  pNode = None
  if index < len(data):
    if not data[index]:
      return
    pNode = listNode(data[index])
    pNode.next = creatLinkedList(data, index + 1)
  return pNode

def linkedList2list(head):
  pNode = head
  res = []
  while pNode:
    res.append(pNode.val)
    pNode = pNode.next
  return res


```


## 二叉树

Traversals遍历二叉树(先序遍历, 中序遍历, 后序遍历, 深度优先DFS, 广度优先BFS)

- PreOrder 先序遍历: 根节点 -> 左子树 -> 右子树 (DFS)
- InOrder 中序遍历：左子树 -> 根节点 -> 右子树  (DFS)
- PostOrder 后序遍历：左子树 -> 右子树 -> 根节点  (DFS)
- LevelOrder 层序遍历 (BFS)

[geeksforgeeks-tree](https://www.geeksforgeeks.org/binary-tree-data-structure/)

[lectures/Trees](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html)

完全二叉树（Complete Binary Tree）：

若设二叉树的深度为h

1.  (1～h-1) 各层的结点数都达到最大个数。
2.  第 h 层所有的结点都连续集中在最左边。

因此。如果根节点存储在索引i中，那么它的左子节点和右子节点分别存储在索引2*i+1、2*i+2中。



满二叉树（Full Binary Tree）：

每个节点都有0或2个子节点



平衡二叉树：

一个二叉树*每个节点* 的左右两个子树的高度差的绝对值不超过1。

二叉搜索树：一种基于节点的二叉树数据结构。具有如下特点:

- 节点的左子树只包含键值小于节点键值的节点。
- 节点的右子树只包含键值大于节点键值的节点。
- 左右子树也必须是二叉搜索树。



测试用例中先转成二叉树

```py
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

###################一般输入的是水平顺序遍历的二叉树，null/None表示空节点、。############################
def creatTree(data, index):
  pNode = None
  if index < len(data):
    # if data[index] == None:
    if not data[index]:
      return
    pNode = TreeNode(data[index])
    pNode.left = creatTree(data, 2 * index + 1)
    pNode.right = creatTree(data, 2 * index + 2)
  # print pNode
  return pNode

def levelOrder(root):
  nodeList = []
  pList = []
  if not root:
    return
  nodeList.append(root)
  while(len(nodeList) > 0):
    pNode = nodeList.pop(0)
    pList.append(pNode.val) 
    if pNode.left is not None:
      nodeList.append(pNode.left)
    if pNode.right is not None:
      nodeList.append(pNode.right)
    # print pList
  return pList
  
def levelOrder(self, root):
    """
    :type root: TreeNode
    :rtype: List[List[int]]
    """
    res = []  
    nodeList = []
    level = 0
    if not root:
      return res
    nodeList.append(root)
    while len(nodeList) > 0:
      res.append([])
      # print len(res)
      levelLen = len(nodeList)
      for i in range(levelLen):
        res[level].append(nodeList[0].val)
        pNode = nodeList.pop(0)
        if pNode.left is not None:
          nodeList.append(pNode.left)
        if pNode.right is not None:
          nodeList.append(pNode.right)
      level += 1
    print res
    return res

def preOrder(root):
  if root == None:
    return []
  left = preOrder(root.left)
  right = preOrder(root.right)
  return [root.val] + left  + right

def inOrder(root):
  if root == None:
    return []
  left = inOrder(root.left)
  right = inOrder(root.right)
  return  left + [root.val] + right

def postOrder(root):
  if root == None:
    return []
  left = postOrder(root.left)
  right = postOrder(root.right)
  return left + right + [root.val]
  
if __name__ == "__main__":
  creatTree([1,2,3,4,5,6,7], 0)
```



