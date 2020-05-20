# Definition for singly-linked list.
class listNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None
    
def creatLinkedList(data, index):
  pNode = None
  if index < len(data):
    if not data[index]:
      return
    pNode = listNode(data[index])
    pNode.next = creatLinkedList(data, index + 1)
  return pNode

def linkedList2list(head):
  pNode = head
  res = []
  while pNode:
    res.append(pNode.val)
    pNode = pNode.next
  return res