# py2.7
# pascals-triangle-ii
# :type rowIndex: int
# :rtype: List[int]

rowIndex = 4

# rowIndex = 0
res = [1]
if rowIndex == 1:
  res = [1,1]
elif rowIndex > 1:
  res = [1,1]
  for i in range(1, rowIndex):
    tmpList = res
    # print 'length of row:', i+1, tmpList
    # res = [1]
    # for j in range(1,i+1):
    #   curNum = tmpList[j-1] + tmpList[j]
    #   res.append(curNum)
    # res.append(1)
    # optimize-1
    # res = []
    res = range(i+2)
    midIndex = (i+2) / 2
    res[0] = res[i+1] = 1
    for j in range(1, midIndex+1):
      curNum = 1
      if j > 0:
         curNum = tmpList[j-1] + tmpList[j]
      res[j] = curNum
      if j < round((i+2) / 2):
        res[i+1-j] = curNum
    # print 'length of row:', i+1, midIndex, res

print res
