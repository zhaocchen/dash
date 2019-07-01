# py2
# univalued-binary-tree

class Solution(object):
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.checkNode(root, root.val)
        # if root != None:
        #   print root.val
        #   self.isUnivalTree(root.left)
        #   self.isUnivalTree(root.right)
    def checkNode(self, root, val):
      bool = True
      if root != None:
        bool = root.val == val and self.checkNode(root.left, val) and self.checkNode(root.right, val)
      # print bool
      return bool

# Definition for a binary tree node.
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
  # print pNode
  return pNode

if __name__ == "__main__":
  testData = [
    [1,2,3,4,5,6],
    [1,1,1,1,1,None,1],
    [2,2,2,5,2],
  ]
  test = Solution()
  for item in testData:
    # print item
    print test.isUnivalTree(creatTree(item, 0))
