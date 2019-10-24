# py2
# subsets

class Solution(object):
  def subsets(self, nums):
    """
    :type nums: List[int]
    :rtype: List[List[int]]
    """
    numsLen = len(nums)
    res = [[]]
    for num in nums:
      # print [[num] + list1 for list1 in res]
      res = res + [[num] + list1 for list1 in res]
    print res
    return res

if __name__ == '__main__':
  testData = [
    # [],
    # [5],
    [1,2,3]
  ]
  test = Solution()
  for item in testData:
    # print item
    test.subsets(item)
