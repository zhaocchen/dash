# py2
# student-attendance-record-i

class Solution(object):
  def checkRecord(self, s):
    """
    :type s:str
    :rtype: bool
    """
    res = s.count('A') < 2 and s.find('LLL') < 0
    print res
    return res

if __name__ == '__main__':
  testData = [
    "PPALLP",
    "PPALLL",
    "ALLAPPL",
  ]
  test = Solution()
  for item in testData:
    # print item
    test.checkRecord(item)