# py 2.7
# maximum-depth-of-binary-tree
# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
  def maxDepth(self, root):
    # :type root: TreeNode
    # :rtype: int
    if root is None:
      return 0
    else:
      left_height = self.maxDepth(root.left)
      right_height = self.maxDepth(root.right)
      return max(left_height, right_height) + 1
