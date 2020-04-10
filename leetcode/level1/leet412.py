# py2
# fizz-buzz

class Solution(object):
  def fizzBuzz(eslf, n):
    """
    :type n: int
    :rtype: List[str]
    """
    res = []
    for index in range(n):
      i = index + 1
      if i % 3 == 0 and i % 5 == 0:
        res.append('FizzBuzz')
      elif i % 3 == 0:
        res.append('Fizz')
      elif i % 5 == 0:
        res.append('Buzz')
      else:
        res.append(str(i))
    print res
    return res

if __name__ == '__main__':
  testData = [15]
  test = Solution()
  for item in testData:
    # print item
    test.fizzBuzz(item)
