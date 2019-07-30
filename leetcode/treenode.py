class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

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
  tree = creatTree([1,2,3,4,5,6,7], 0)
  print tree
  print levelOrder(tree)
  print preOrder(tree)
  print inOrder(tree)
  print postOrder(tree)