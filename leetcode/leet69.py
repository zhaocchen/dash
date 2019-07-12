# py2
# sqrtx

class Solution(object):
  def mySqrt(self, x):
    """
    :type x: int
    :rtype: int
    """
    if x == 0:
      return 0
    last = 0.0
    res = 1.0
    while last != res:
      last = res
      res = (res+x/res) / 2
    return int(res)

if __name__ == "__main__":
  s = Solution()
  for i in range(0, 30):
    print i, s.mySqrt(i)
  # print s.mySqrt(16)