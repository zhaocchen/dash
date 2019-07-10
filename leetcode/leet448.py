# py2
# find-all-numbers-disappeared-in-an-array

class Solution(object):
  def findDisappearedNumbers(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    res = []
    # for n in range(1, len(nums)+1):
    #   if n not in nums:
    #     res.append(n)
    for n in nums:
      i = abs(n)
      nums[i-1] = -abs(nums[i-1])
    res = [i + 1 for i, n in enumerate(nums) if n > 0]
    # print res
    return res

if __name__ == "__main__":
  testData = [
    [4,3,2,7,8,2,3,1]
  ]
  test = Solution()
  for i in testData:
    print i
    test.findDisappearedNumbers(i)
