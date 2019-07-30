# py2.7
# balanced-binary-tree

class Solution(object):
  def isBalanced(self, root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    return self.depth(root) != -1
  def depth(self, root):
    if not root:
      return 0
    left = self.depth(root.left)
    if left == -1:
      return -1
    right = self.depth(root.right)
    if right == -1:
      return -1
    return max(left, right) + 1 if abs(left - right) < 2 else -1


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
    [3,9,20,None,None,15,7],
    [1,2,2,3,3,None,None,4,4]
  ]
  test = Solution()
  for i in testData:
    tree = creatTree(i, 0)
    print test.isBalanced(tree)