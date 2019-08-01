# py2
# coin-change

class Solution(object):
  def coinChange(self, coins, amount):
    """
    :type coins: List[int]
    :type amount: int
    :rtype: int
    """
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount+1):
      for coin in coins:
        if i >= coin:
          dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[-1] if dp[-1] != float("inf") else -1
    

if __name__ == "__main__":
  testData = [
    {
      'coins': [1, 2, 5],
      'amount': 11,
    },
    {
      'coins': [2],
      'amount': 3
    }
  ]
  test = Solution()
  for i in testData:
    print i
    print test.coinChange(i.get('coins'), i.get('amount'))