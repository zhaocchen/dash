# py2
# invert-binary-tree

class Solution(object):
  def invertTree(self, root):
    """
    :type root: TreeNode
    :rtype: TreeNode
    """
    if not root:
      return
    root.left, root.right = root.right, root.left
    self.invertTree(root.left)
    self.invertTree(root.right)
    return root

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
  testData = [
    [4,2,7,1,3,6,9]
  ]
  test = Solution()
  for item in testData:
    print item
    testTree = creatTree(item, 0)
    print testTree
    newTree = test.invertTree(testTree)
    print levelOrder(newTree)

