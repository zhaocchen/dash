### leecode

类别(算法,数据库,shell)
难度(a简单, b中等, c困难)


|#|题目|语言|难度|完成|注释|
|:-|:-:|:-:|:-:|:-:|:-:|
|401|二进制手表|py2|a|--|--|
|177| 第N高的薪水|sql|b|true|DESC LIMIT|
|4| 寻找两个有序数组的中位数 |py2|c|true|sort|
|33| 搜索旋转排序数组 |py2|b|true|二分法搜索|
|119| 杨辉三角 |py2|a|true|--|
|1094（142周赛）| 拼车 |py2|b|true|乘车问题|
|--| --------------二叉树------------- |--|--|--|--|
|965| 单值二叉树 |py2|a|true|创建二叉树|
|101| 对称二叉树 |py2|a|true|遍历二叉树|
|226| 翻转二叉树 |py2|a|true|遍历二叉树|
|617| 合并二叉树 |py2|a|true|遍历二叉树|



## 二叉树

Traversals遍历二叉树(先序遍历, 中序遍历, 后序遍历, 深度优先DFS, 广度优先BFS)

- PreOrder 先序遍历: 根节点 -> 左子树 -> 右子树
- InOrder 中序遍历：左子树 -> 根节点 -> 右子树
- PostOrder 后序遍历：左子树 -> 右子树 -> 根节点 
- LevelOrder 层序遍历

[geeksforgeeks-tree](https://www.geeksforgeeks.org/binary-tree-data-structure/)

[lectures/Trees](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html)



二叉搜索树：一种基于节点的二叉树数据结构。具有如下特点:

- 节点的左子树只包含键值小于节点键值的节点。
- 节点的右子树只包含键值大于节点键值的节点。
- 左右子树也必须是二叉搜索树。



完全二叉树：

一般输入的是水平顺序遍历的二叉树，null/None表示空节点

测试用例中先转成二叉树

```
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

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
    pList.append(nodeList[0].val)
    pNode = nodeList.pop(0)
    if pNode.left is not None:
      nodeList.append(pNode.left)
    if pNode.right is not None:
      nodeList.append(pNode.right)
    # print pList
  return pList

if __name__ == "__main__":
  creatTree([1,2,3,4,5,6,7], 0)
```

