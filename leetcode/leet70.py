# py2
# climbing-stairs

class Solution(object):
  def climbStaires(self, n):
    """
    :type n: int
    :rtype: int
    """
    if n == 0:
      return 0
    elif n == 1:
      return 1
    dp = [None for i in range(n+1)]
    [dp[1], dp[2]] = [1, 2]
    if n > 2:
      i = 3
      while i <= n:
        dp[i] = dp[i-1] + dp[i-2]
        i += 1
    print dp
    return dp[-1]


if __name__ == "__main__":
  testData = [2,3]
  test = Solution()
  for i in testData:
    print test.climbStaires(i)