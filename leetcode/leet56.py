# py2
# merge-intervals

class Solution(object):
  def merge(self, intervals):
    """
    :type intervals: List[List[int]]
    :rtype: List[List[int]]
    """
    if len(intervals) < 2:
      return intervals
    intervals.sort(key=lambda d: d[0])
    res = [intervals[0]]
    for index in range(1, len(intervals)):
      if intervals[index][0] <= res[-1][1]:
        res[-1] = [min(res[-1][0], intervals[index][0]), max(res[-1][1], intervals[index][1])]
        continue
      res.append(intervals[index])
    print(res)
    return res
      

if __name__ == '__main__':
  testData = [
    [[1,3],[8,10],[2,6],[15,18]],
    [[1,4],[4,5]],
    [[1,4],[0,4]],
    [[1,3],[2,6],[8,10],[15,18]],
  ]
  test = Solution()
  for item in testData:
    # print(item)
    test.merge(item)

