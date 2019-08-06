# py2
# fibonacci-number 

class Solution(object):
  def fib(self, N):
    """
    :type N: int
    :rtype: int
    """
    memo = [None for i in range(N+1)]
    return self.helper(memo, N)
  def helper(self, memo, N):
    if N < 1:
      return 0
    elif N < 3:
      return 1
    if memo[N] is not None:
      return memo[N]
    memo[N] = self.helper(memo, N-1) + self.helper(memo, N-2)
    print memo
    return memo[N]

if __name__ == "__main__":
  testData = [0, 2, 3, 4, 5, 6]
  test = Solution()
  # for i in testData:
  #   print test.fib(i)
  print test.fib(5)
  