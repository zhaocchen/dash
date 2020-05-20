# py2
# delete-node-in-a-linked-list

class Solution(object):
  def deleteNode(self, head, node):
    """
    :type node: ListNode
    :rtype: void Do not return anything, modify node in-place instead.
    """
    # pNode = self
    pNode = head
    while pNode is not None:
      if pNode.val == node and pNode.next is not None:
        pNode.val = pNode.next.val
        pNode.next = pNode.next.next
      else:
        pNode = pNode.next

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

if __name__ == "__main__":
  testData = [
    [4,5,1,9]
  ]
  test = Solution()
  for i in testData:
    print i
    linkedList = creatLinkedList(i, 0)
    print linkedList
    test.deleteNode(linkedList, 5)
    print linkedList2list(linkedList)

