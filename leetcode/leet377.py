# p2.7
# combination-sum-iv

class Solution(object):
  def combinationSum4(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    # dp[i] = sum{dp[i - num] for num in nums and if i >= num}
    dp = [1]
    for i in range(target):
      res = 0
      for j in nums:
        if j <= len(dp):
          res += dp[-j]
      dp.append(res)
    print dp
    return dp[-1]

if __name__ == "__main__":
  testData = [
    {
      'nums': [1, 2, 3],
      'target': 4
    },
  ]
  test = Solution()
  for i in testData:
    print i
    test.combinationSum4(i.get('nums'), i.get('target'))