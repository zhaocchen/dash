# py2
# power-of-four

class Solution(object):
  def isPowerOfFour(self, num):
    """
    :type num: int
    :rtype: bool
    """
    while num > 4:
      if num % 4 != 0:
        return False
      num = num / 4
    res = True if num == 4 or num == 1 else False
    return res   


if __name__ == '__main__':
  testData = [16, 5, 1]
  test = Solution()
  for item in testData:
    # print(item)
    print test.isPowerOfFour(item)