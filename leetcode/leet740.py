# py2
# delete-and-earn

class Solution(object):
  def deleteAndEarn(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    N = len(nums)
    if N == 0:
      return 0
    elif N == 1:
      return nums[0]
    N = max(nums)
    dp = [0 for i in range(N+1)]
    for i in nums:
      dp[i] += 1
    print dp
    # dp[i] = max(dp[i-1], dp[i-2]+dp[i]*i)
    i = 2
    while i <= N:
      dp[i] = max(dp[i-1], dp[i-2]+dp[i]*i)
      i += 1
    print dp
    return dp[-1]

if __name__ == "__main__":
  testData = [
    [3, 4, 2],
    [2, 2, 3, 3, 3, 4],
    [3,1],
  ]
  test = Solution()
  for i in testData:
    print test.deleteAndEarn(i)

