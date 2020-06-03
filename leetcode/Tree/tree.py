class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

###################一般输入的是水平顺序遍历的二叉树，null/None表示空节点、。############################
def creatTree(data, index):
  pNode = None
  if index < len(data):
    # if data[index] == None:
    if not data[index]:
      return
    pNode = TreeNode(data[index])
    pNode.left = creatTree(data, 2 * index + 1)
    pNode.right = creatTree(data, 2 * index + 2)
  # print pNode
  return pNode

def levelOrder(root):
  nodeList = []
  pList = []
  if not root:
    return
  nodeList.append(root)
  while(len(nodeList) > 0):
    pNode = nodeList.pop(0)
    pList.append(pNode.val) 
    if pNode.left is not None:
      nodeList.append(pNode.left)
    if pNode.right is not None:
      nodeList.append(pNode.right)
    # print pList
  return pList
  
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

def preOrder(root):
  if root == None:
    return []
  left = preOrder(root.left)
  right = preOrder(root.right)
  return [root.val] + left  + right

def inOrder(root):
  if root == None:
    return []
  left = inOrder(root.left)
  right = inOrder(root.right)
  return  left + [root.val] + right

def postOrder(root):
  if root == None:
    return []
  left = postOrder(root.left)
  right = postOrder(root.right)
  return left + right + [root.val]
  
if __name__ == "__main__":
  creatTree([1,2,3,4,5,6,7], 0)