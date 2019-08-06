# py2
# fibonacci-number 

class Solution(object):
  def fib(self, N):
    """
    :type N: int
    :rtype: int
    """
    if N < 1:
      return 0
    elif N < 3:
      return 1
    dp = [None for i in range(N+1)]
    dp[0] = 0
    [dp[1], dp[2]] = [1, 1]
    i = 3
    while i <= N:
      dp[i] = dp[i-1] + dp[i-2]
      i += 1
    return dp[-1]


if __name__ == "__main__":
  testData = [0, 2, 3, 4, 5, 6]
  test = Solution()
  for i in testData:
    print test.fib(i)
  print test.fib(5)
  