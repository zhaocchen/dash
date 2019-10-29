# py2
# longest-substring-without-repeating-characters

class Solution(object):
  def lengthOfLongestSubstring(self, s):
    """
    :type s: str
    :rtype: int
    """
    print s

if __name__ == '__main__':
  testData = [
    'abcabcbb', # 3
    'bbbbb', # 1
    'pwwkew', # 3
  ]
  test = Solution()
  for item in testData:
    # print item
    test.lengthOfLongestSubstring(item)