# py2
# add-two-numbers

class Solution(object):
  def addTwoNumber(self, l1, l2):
    """
    :type l1: ListNode
    :type l2: ListNode
    :rtype: ListNode
    """
    (node1, node2) = (l1, l2)
    tmp = 0
    l3 = []
    while node1 is not None or node2 is not None:
      (t1, t2) = (0, 0)
      if node1 is not None:
        t1 = node1.val
        node1 = node1.next
      if node2 is not None:
        t2 = node2.val
        node2 = node2.next
      curT = t1+t2+tmp
      if curT > 9:
        curT -= 10
        tmp = 1
      else:
        tmp = 0
      l3.append(curT)
    if tmp != 0:
      l3.append(tmp)
      print l3
    return creatLinkedList(l3, 0)
  def creatLinkedList(self, data, index):
    pNode = None
    if index < len(data):
      pNode = ListNode(data[index])
      pNode.next = self.creatLinkedList(data, index + 1)
    return pNode
      

class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None

def creatLinkedList(data, index):
  pNode = None
  if index < len(data):
    pNode = ListNode(data[index])
    pNode.next = creatLinkedList(data, index + 1)
  return pNode

if __name__ == "__main__":
  testData = [
    [[2,4,3], [5,6,4]],
    [[5], [5]],
  ]
  test = Solution()
  for i in testData:
    l1 = creatLinkedList(i[0], 0)
    l2 = creatLinkedList(i[1], 0)
    print l1, l2
    test.addTwoNumber(l1, l2)

