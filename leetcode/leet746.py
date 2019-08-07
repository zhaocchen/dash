# py2
# min-cost-climbing-stairs

class Solution(object):
  def minCostClimbingStairs(self, cost):
    """
    :type cost: List[int]
    :rtype: int
    """
    N = len(cost)
    if N == 0:
      return 0
    elif N == 1:
      return cost[0]
    elif N == 2:
      return min(cost)
    dp = [None for i in range(N)]
    [dp[0], dp[1]] = [cost[0], cost[1]]
    # dp[n] = min(dp[n-1], dp[n-2]) + cost[i]
    if N > 1:
      i = 2
      while i < N:
        dp[i] = min(dp[i-1], dp[i-2]) + cost[i]
        i += 1
    print dp
    return min(dp[-2:])

if __name__ == "__main__":
  testData = [
    # [],
    # [10],
    # [10, 15],
    [10, 15, 20],
    [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  ]
  test = Solution()
  for cost in testData:
    print test.minCostClimbingStairs(cost)