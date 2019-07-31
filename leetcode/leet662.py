# py2.7

class Solution(object):
    def __init__(self):
        self.maxW = 0
    def widthOfBinaryTree(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if not root:
          return 0
        left = []
        self.dfs(root, 1, 1, left)
        print self.maxW
        return self.maxW
        # return maxW
    def dfs(self, root, level, id, left):
        """
        :type root: TreeNode
        :type level: int
        :type id: int
        :rtype: no return
        """
        if not root:
          return
        if level > len(left):
          left.append(id)
        self.maxW = max(self.maxW, id - left[level-1] + 1);
        # print level,id,left, self.maxW
        self.dfs(root.left, level + 1, 2 * id, left)
        self.dfs(root.right, level + 1, 2 * id + 1, left)

# Definition for a binary tree node.
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
    # {
    #   'numsList': [1,3,2,5,3,None,9],
    #   'res': 4
    # },
    # {
    #   'numsList': [1,3,None,5,3],
    #   'res': 2
    # },
    # {
    #   'numsList': [1,3,2,5],
    #   'res': 2
    # },
    {
      'numsList': [1,3,2,5,None,None,9,6,None,None,7],
      'res': 8
    },
    # {
    #   'numsList': [1,1,1,1,None,None,1,1,None,None,1],
    #   'res': 8
    # }
  ]
  test = Solution()
  for i in testData:
    tree = creatTree(i.get('numsList'), 0)
    print 'target', i.get('res'), tree
    test.widthOfBinaryTree(tree)