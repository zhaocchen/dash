# py2
# merge-two-binary-trees

class Solution(object):
  def mergeTrees(self, t1, t2):
    """
    :type t1: TreeNode
    :type t2: TreeNode
    :rtype: TreeNode
    """
    pNode = None
    if not t1 and not t2:
      return
    if t1 is not None and t2 is not None:
      # print t1.val, t2.val
      pNode = TreeNode(t1.val + t2.val)
      pNode.left = self.mergeTrees(t1.left, t2.left)
      pNode.right = self.mergeTrees(t1.right, t2.right)
    elif t1 is not None:
      pNode = t1
    else:
      pNode = t2
    # print pNode.val
    return pNode

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
    {
      'root1': [1,2,3,4,5,6,7],
      'root2': [1,2,3,4,5,6,7],
    },
    {
      'root1': [1,3,2,5],
      'root2': [2,1,3,None,4,None,7],
    },
  ]
  test = Solution()
  for item in testData:
    print item
    t1, t2 = creatTree(item.get('root1'), 0), creatTree(item.get('root2'), 0)
    print t1, t2
    newTree = test.mergeTrees(t1, t2)
    print levelOrder(newTree)

