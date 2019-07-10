# py2
# array-partition-i

class Solution(object):
  def arrayPairSum(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    count = 0
    # self.sort(nums)
    nums.sort()
    # print nums
    nums[:] = nums[::2]
    # print nums
    count = sum(nums)
    # print count
    return count
  def bubleSort(self, nums):
    """
    :type nums: List[int]
    :rtype: return None, only change nums
    """
    length = len(nums)
    for i in range(length - 1):
      for j in range(length - i - 1):
        if nums[j] > nums[j+1]:
          nums[j], nums[j+1] = nums[j+1], nums[j]


if __name__ == "__main__":
  testData = [
    [1,4,3,2]
  ]
  test = Solution()
  for i in testData:
    print i
    test.arrayPairSum(i)
