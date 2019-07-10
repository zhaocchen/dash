# py2
# find-all-duplicates-in-an-array

class Solution(object):
  def findDuplicates(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    res = []
    for i in nums:
      if nums[abs(i) - 1] > 0:
        nums[abs(i) - 1] *= -1
      else:
        res.append(abs(i))
      # print i, nums
    # print res
    return res

if __name__ == "__main__":
  testData = [
    [4,3,2,7,8,2,3,1]
  ]
  test = Solution()
  for i in testData:
    print i
    test.findDuplicates(i)



