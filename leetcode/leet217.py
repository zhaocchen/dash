# py2
# contains-duplicate

class Solution(object):
  def containsDuplicate(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    if len(nums) < 2:
      return False
    nums.sort()
    for i in range(1, len(nums)):
      # print i, nums[i], nums[:i]
      if nums[i] == nums[i-1]:
        return True
    return False


if __name__ == '__main__':
  testData = [
    [1,2,3,1],
    [1,2,3,4],
    [1,1,1,3,3,4,3,2,4,2],
  ]
  test = Solution()
  for item in testData:
    # print item
    print test.containsDuplicate(item)