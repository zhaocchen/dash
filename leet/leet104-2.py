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
    stack = []
    if root is not None:
      stack.append((1, root))
    depth = 0
    while stack != []:
      current_depth, root = stack.pop()
      if root is not None:
        depth = max(depth, current_depth)
        stack.append((current_depth + 1, root.left))
        stack.append((current_depth + 1, root.right))
    return depth
