# py2
# set-matrix-zeroes

class Solution(object):
  def setZeros(self, matrix):
    """
    :type: List[List[int]]
    :rtype: None Do not return anything, modify matrix in-place instead.
    """
    rowLen = len(matrix)
    colLen = len(matrix[0])
    col = []
    row = []
    for r in range(rowLen):
      if 0 not in matrix[r]:
        continue
      for c in range(colLen):
        print(matrix[r][c])
        if matrix[r][c] is 0:
          col.append(c)
          row.append(r)
    # print(col, row)
    for r in range(rowLen):
      for c in range(colLen):
        if r in row or c in col:
          matrix[r][c] = 0
    print(matrix)


if __name__ == '__main__':
  testData = [
    [
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ],
    [
      [0,1,2,0],
      [3,4,5,2],
      [1,3,1,5]
    ]
  ]
  test = Solution()
  for item in testData:
    # print(item)
    test.setZeros(item)
