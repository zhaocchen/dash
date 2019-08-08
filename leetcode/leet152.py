# py2
# maximum-product-subarray

class Solution(object):
  def maxProduct(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    N = len(nums)
    if N == 0:
      return 0
    elif N == 1:
      return nums[0]
    # dp[i] = max(dp[i-1] * nums[i], nums[i])
    dp1 = [None for i in nums]
    dp1[0] = nums[0]
    dp2 = dp1[:]
    i = 1
    while i < N:
      cur_num = nums[i]
      if cur_num >=0 :
        dp1[i] = min(dp1[i-1] * cur_num, cur_num)
        dp2[i] = max(dp2[i-1] * cur_num, cur_num)
      else:
        dp1[i] = min(dp2[i-1] * cur_num, cur_num)
        dp2[i] = max(dp1[i-1] * cur_num, cur_num)
      i += 1
    print dp1, dp2
    return max(dp2)

if __name__ == "__main__":
  testData = [
    [2,3,-2,4],
    [-2,0,-1],
    [-2,3,-4],
  ]
  test = Solution()
  for i in testData:
    print test.maxProduct(i)

