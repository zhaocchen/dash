# py2
# contains-duplicate

class Solution(object):
  def containsNearbyDuplicate(self, nums, k):
    """
    :type nums: List[int]
    :rtype: bool
    """
    if len(nums) < 2:
      return True
    # nums.sort()
    for i in range(1, len(nums)):
      # print i, nums[i], nums[:i] 
      if nums[i] in nums[:i] and nums[:i].index(nums[i]) + k < i:
        # print 'test', False
        return False
      # if nums[i] == nums[i-1]:
        # return True
    return True


if __name__ == '__main__':
  testData = [
    {
      'nums': [1,2,3,1],
      'k': 3,
    },
    {
      'nums': [1,0,1,1],
      'k': 1,
    },
    {
      'nums': [1,2,3,1,2,3],
      'k': 2,
    },
    
  ]
  test = Solution()
  for item in testData:
    # print item.get('nums'), item.get('k')
    print test.containsNearbyDuplicate(item.get('nums'), item.get('k'))