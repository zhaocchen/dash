# py2
# average-of-levels-in-binary-tree

class Solution(object):
  def averageOfLevels(self, root):
    """
    :type root: TreeNode
    :rtype: List[Float]
    """
    res = []
    nodeList = []
    level = 0
    if not root:
      return
    nodeList = [root]
    while(len(nodeList) > 0):
      curList = []
      for i in range(len(nodeList)):
        pNode = nodeList.pop(0)
        if pNode.val is not None:
          curList.append(pNode.val)
        if pNode.left is not None:
          nodeList.append(pNode.left)
        if pNode.right is not None:
          nodeList.append(pNode.right)
      aveNum = float(sum(curList)) / len(curList)
      if sum(curList) % len(curList) == 0:
        aveNum = int(aveNum)
      # print aveNum
      level += 1
      res.append(aveNum)
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
    test.averageOfLevels(curTree)
