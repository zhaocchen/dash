# py2.7
# spiral-matrix

class Solution(object):
  def spiralOrder(self, matrix):
    """
    :type matrix: List[List[int]]
    :type: List[int]
    """
    res = []
    flag = 1
    while matrix != []:
      tmpList = []
      if flag % 2 == 1:
        if flag % 4 == 1:
          tmpList = matrix.pop(0)
        else:
          tmpList = matrix.pop()
      else:
        for nums in matrix:
          if flag % 4 == 2:
            tmpList.append(nums.pop())
          else:
            tmpList.append(nums.pop(0))
        # filter
        matrix = [i for i in matrix if i != []]
      if flag % 4 == 3 or flag % 4 == 0:
          tmpList = tmpList[::-1]
      res = res + tmpList
      # print tmpList, res
      flag += 1
    print res
    return res

if __name__ == "__main__":
  testData = [
    [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ],
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9,10,11,12]
    ],
    [[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]]
  ]
  test = Solution()
  for item in testData:
    test.spiralOrder(item)
    