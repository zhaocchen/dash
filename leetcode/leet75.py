# py2
# sort-colors

class Solution(object):
  def sortColors(self, nums):
    """
    :type nums: List[int]
    :rtype: None Do Not return anything, modify nums in-place instead.
    """
    numsLen = len(nums)
    for j in range(1, numsLen):
      for k in range(j, numsLen):
        if nums[j-1] > nums[k]:
          [nums[j-1], nums[k]] = [nums[k], nums[j-1]]
    print(nums)

if __name__ == '__main__':
  testData = [
    [2,0,2,1,1,0],
    [2,0,1],
  ]
  test = Solution()
  for item in testData:
    # print(item)
    test.sortColors(item)