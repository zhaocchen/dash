# py2
# symmetric-tree

class Solution(object):
  def isSymmetric(self, root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    res = True
    res = self.isEqual(root, root)
    return res
  def isEqual(self, root1, root2):
    if root1 == None and root2 == None:
      return True
    elif root1 == None or root2 == None:
      return False
    if root1.val != root2.val:
      return False    
    return self.isEqual(root1.left, root2.right) and self.isEqual(root1.right, root2.left)


# Definition for a binary tree node
class TreeNode(object):
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

def creatTree(data, index):
  pNode = None
  if index < len(data):
    if data[index] == None:
      return
    pNode = TreeNode(data[index])
    pNode.left = creatTree(data, 2 * index + 1)
    pNode.right = creatTree(data, 2 * index + 2)
    return pNode

if __name__ == "__main__":
  testData = [
    [1,2,2,3,4,4,3],
    [1,2,2,None,3,None,3],
  ]
  test = Solution()
  for i in testData:
    print i
    print creatTree(i, 0)
    binaryTree = creatTree(i, 0)
    print test.isSymmetric(binaryTree)

