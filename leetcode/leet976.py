# py2
# largest-perimeter-triangle

class Solution(object):
  def largestPerimeter(self, A):
    """
    :type A: List[int]
    :rtype: int
    """
    res = 0
    B = sorted(A)
    for i in range(len(A) - 2):
      # print i
      if B[i] + B[i+1] > B[i+2]:
        res = B[i] + B[i+1] + B[i+2]
    print res
    return res

if __name__ == '__main__':
  testData = [
    [2,1,2], # 5
    [1,2,1], # 0
    [3,2,3,4], # 10
    [3,6,2,3], # 8
  ]
  test = Solution()
  for item in testData:
    # print item
    test.largestPerimeter(item)