# py
# binary-tree-level-order-traversal

class Solution(object):
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

# Definition for a binary tree node
class TreeNode(object):
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

def creatTree(data, index):
  pNode = None
  if index < len(data):
    if not data[index]:
      return
    pNode = TreeNode(data[index])
    pNode.left = creatTree(data, 2 * index + 1)
    pNode.right = creatTree(data, 2 * index + 2)
  return pNode

if __name__ == "__main__":
  testData = [
    [3,9,20,None,None,15,7]
  ]
  test = Solution()
  for i in testData:
    print i
    curTree = creatTree(i, 0)
    print curTree
    test.levelOrder(curTree)
