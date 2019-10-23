# py2
# unique-paths

class Solution(object):
  def uniquePaths(self, m, n):
    """
    :type m: int
    :type n: int
    :rtype: int
    """
    # dp = [1 for index in range(n)]
    dp = [1] * n
    for j in range(1, m):
      for k in range(1, n):
        dp[k] = dp[k] + dp[k-1]
    print(dp[-1])
    return dp[-1]

if __name__ == '__main__':
  testData = [
    { 'm': 2, 'n': 2 },
    { 'm': 3, 'n': 2 }
  ]
  test = Solution()
  for item in testData:
    # print(item)
    test.uniquePaths(item.get('m'), item.get('n'))
