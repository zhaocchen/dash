# py2.7
# n-th-tribonacci-number

class Solution(object):
  def tribonacci(self, n):
    """
    :type n: int
    :rtype: int
    """
    if n == 0:
      return 0
    elif n < 3:
      return 1
    numList = [0,1,1]
    i = 2
    while i < n:
      sum = 0
      for j in numList:
        sum += j
      numList.append(sum)
      numList.pop(0)
      i += 1
    return numList[2]

if __name__ == "__main__":
  testData = [0,1,2,3,4,5]
  test = Solution()
  for item in testData:
    print test.tribonacci(item)
  print test.tribonacci(25)