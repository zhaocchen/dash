# py2
# squares-of-a-sorted-array

class Solution(object):
  def sortedSquares(self, A):
    """
    :type A: List[int]
    :rtype: List[int]
    """
    res = []
    midIndex = 0
    for (index, a) in enumerate(A):
      if a >= 0:
        midIndex = index
        break
    # print midIndex
    i, j = midIndex-1, midIndex
    # print i, j
    while i >= 0 and j < len(A):
      left = A[i]**2
      right = A[j]**2
      if left > right:
        res.append(right)
        j += 1
      else:
        res.append(left)
        i -= 1
    while i >= 0:
      res.append(A[i]**2)
      i -= 1
    while j < len(A):
      res.append(A[j]**2)
      j += 1
    print res
    return res
    
if __name__ == "__main__":
  testData = [
    # [-4,-1,0,3,10],
    # [-7,-3,2,3,11],
    [-3,0,2],
  ]
  test = Solution()
  for item in testData:
    print item
    test.sortedSquares(item)
