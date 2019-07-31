# py2.7
# decoded-string-at-index

class Solution(object):
  def decodeAtIndex(self, S, K):
    """
    :type S: str
    :type K: int
    :rtype: str
    """
    size = 0
    for s in S:
      if s.isdigit():
        size *= int(s)
      else:
        size += 1
    # print size
    for s in reversed(S):
      # print s
      # if K < size,  k % size = K, let size smaller;
      # if K === size, K % size = 0; if not int , return 
      # if K > size, let K smaller
      K %= size
      if K == 0 and s.isalpha():
        return s
      if s.isdigit():
        size /= int(s)
      else:
        size -= 1
      # print K, size       

if __name__ == "__main__":
  testData = [
    {
      's': 'leet2code3',
      'k': 10,
    },
    {
      's': 'ha22',
      'k': 5,
    },
    {
      's': 'a2345678999999999999999',
      'k': 1,
    }
  ]
  test = Solution()
  for i in testData:
    print i.get('s'), i.get('k')
    print test.decodeAtIndex(i.get('s'), i.get('k'))