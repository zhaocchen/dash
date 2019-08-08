# py2
# house-robber

class Solution(object):
  def rob(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    N = len(nums)
    if N == 0:
      return 0
    elif N == 1:
      return nums[0]
    elif N == 2:
      return max(nums)
    # dp[i] = max(dp[i-1], dp[i-2] + nums[i])
    dp = [None for i in nums]
    dp[0] = nums[0]
    dp[1] = max(nums[:2])
    i = 2
    while i < N:
      dp[i] = max(dp[i-1], dp[i-2] + nums[i])
      i += 1
    print dp
    return dp[-1]
    

if __name__ == "__main__":
  testData = [
    [1,2,3,1],
    [2,7,9,3,1],
  ]
  test = Solution()
  for i in testData:
    print test.rob(i)