# py2
# insert-interval

class Solution(object):
  def insert(self, intervals, newInterval):
    """
    :type intervals: List[List[int]]
    :type newInterval: List[int]
    :type intervals: List[List[int]]
    """
    if len(intervals) < 1:
      return [newInterval]
    intervals.append(newInterval)
    intervals.sort(key= lambda d: d[0])
    # print(intervals)
    res = [intervals[0]]
    for index in range(1, len(intervals)):
      if res[-1][1] >= intervals[index][0]:
        res[-1] = [min(res[-1][0], intervals[index][0]), max(res[-1][1],intervals[index][1])]
        continue
      res.append(intervals[index])
    print(res)
    return res

if __name__ == '__main__':
  testData = [
    {
      'intervals': [[1,3],[6,9]],
      'newInterval': [2,5],
      'res': [[1,5],[6,9]],
    },
    {
      'intervals': [[1,2],[3,5],[6,7],[8,10],[12,16]],
      'newInterval': [4,8],
      'res': [[1,2],[3,10],[12,16]],
    }
  ]
  test = Solution()
  for item in testData:
    # print(item)
    test.insert(item.get('intervals'), item.get('newInterval'))
  
