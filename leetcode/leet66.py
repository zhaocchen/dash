# py2
# plus-one

class Solution(object):
  def plusOne(self, digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    digits[-1] += 1
    if digits[-1] <= 9:
      return digits
    LEN = len(digits)
    for i, digit in enumerate(digits):
      curIndex = LEN - i - 1
      if digits[curIndex] == 10:
        digits[curIndex] = 0
        if curIndex > 0:
          digits[curIndex-1] += 1
        else:
          digits.insert(0, 1)
          # print digits
          return digits
    # print digits
    return digits

if __name__ == "__main__":
  testData = [
    # [1,2,3],
    [9,9,9]
  ]
  test = Solution()
  for i in testData:
    print test.plusOne(i)