# py2
# maximum-subarray/solution

# step1, get max of list
# step2, for each list by last item

class solution(object):
  def maxSubArray(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    N = len(nums)
    if N == 0:
      return 0
    if N == 1:
      return nums[0]
    # dp[i] = max(dp[i-1]+nums[i], num[i])
    dp = [None for i in nums]
    i = 1
    dp[0] = nums[0]
    while i < N:
      dp[i] = max(dp[i-1] + nums[i], nums[i])
      i += 1
    print dp
    return max(dp)


if __name__ == "__main__":
  testData = [
    [-2,1,-3,4,-1,2,1,-5,4],
  ]
  test = solution()
  for i in testData:
    print test.maxSubArray(i)