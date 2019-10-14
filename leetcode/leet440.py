# py2
# k-th-smallest-in-lexicographical-order

class Solution(object):
  def findKthNumber(self, n, k):
    """
    :type n: int
    :type k: int
    :rtype: int
    """
    p = 1
    prefix = 1
    while (p < k):
      count = self.getCount(prefix, n)
      if p + count > k:
        prefix *= 10
        p += 1
      else:
        prefix += 1
        p += count
    # print(prefix)
    return prefix
  def getCount(self, prefix, n):
    count = 0
    nextPrefix = prefix + 1
    while (prefix <= n):
      count += min(n+1, nextPrefix) - prefix
      prefix *= 10
      nextPrefix *= 10
    # print(count)
    return count

if __name__ == "__main__":
    testData = [
      {'n':13, 'k':2}
    ]
    test = Solution()
    for i in testData:
      print(i, i.get('n'))
      test.findKthNumber(i.get('n'), i.get('k'))
