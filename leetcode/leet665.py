# py2
# non-decreasing-array

class Solution(object):
    def checkPossibility(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        for i in range(len(nums)- 1):
          if nums[i] > nums[i +1]:
            # print nums
            newNums1 = nums[:]
            del(newNums1[i])
            newNums2 = nums[:]
            del(newNums2[i+1])
            print newNums1, newNums2
            return self.checkAscend(newNums1) or self.checkAscend(newNums2)
        return True
    def checkAscend(self, nums):
      for i in range(len(nums)- 1):
        if nums[i] > nums[i +1]:
          return False
      return True

if __name__ == "__main__":
  testData = [
    [4,2,3], # t
    [4,2,1], # f
    [3,4,2,3], # f
    [2,3,3,2,4], # t
    [1,2,4,5,3], # t
  ]
  test = Solution()
  for i in testData:
    print i
    print test.checkPossibility(i)