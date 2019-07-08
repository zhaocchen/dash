# py2
# largest-number

class Solution(object):
  def largestNumber(self, nums):
    """
    :type nums: List[int]
    :rtype: str
    """
    res = []
    for i in nums:
      res.append(str(i))
    res = self.sort(res)
    res = ''.join(res)
    res = str(int(res))
    print res
    return res
  def compareMax(self, val1, val2):
    """
    :type val1: str
    :type val2: str
    :rtype: bool
    """
    n1 = int(val1+val2)
    n2 = int(val2+val1)
    resBool = n1 < n2
    return resBool
  def sort(self, list):
    """
    :type list: List[str(int)]
    :rtype: List[str(int)]
    """
    newList = list
    listLen = len(newList)
    if listLen > 1:
      for i in range(listLen-1):
        for j in range(listLen-i-1):
          if self.compareMax(newList[j], newList[j+1]):
            newList[j], newList[j+1] = newList[j+1], newList[j]
          j += 1
        i += 1
    return newList

if __name__ == "__main__":
  testData = [
    [10,2], # 210
    [3,30,34,5,9], # 9534330
    [0,0],
  ]
  test = Solution()
  for i in testData:
    print i
    test.largestNumber(i)
  
