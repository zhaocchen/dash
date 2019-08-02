# py2
# add-binary

class Solution(object):
  def addBinary(self, a, b):
    """
    :type a: str
    :type b: str
    :rtype: str
    """
    a = int('0b'+ a, 2)
    b = int(b, 2)
    # print a, b
    s = bin(a+b)
    return s[2:]

if __name__ == "__main__":
  testData = [
    {
      'a': '11',
      'b': '1'
    }
  ]
  test = Solution()
  for i in testData:
    print i
    print test.addBinary(i.get('a'), i.get('b'))