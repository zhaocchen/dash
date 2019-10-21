# py2
# merge-intervals

class Solution(object):
  def merge(self, intervals):
      """
      :type intervals: List[List[int]]
      :rtype: List[List[int]]
      """
      res = []
      if len(intervals) < 2:
        return intervals
      intervals.sort(arr => arr[0])
      for arr in intervals:
        print(arr)
      # print(res)
      return res
      

if __name__ == '__main__':
  testData = [
    [[1,3],[2,6],[8,10],[15,18]],
    [[1,4],[4,5]]
  ]
  test = Solution()
  for item in testData:
    # print(item)
    test.merge(item)

