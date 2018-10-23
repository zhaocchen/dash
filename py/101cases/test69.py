# py 2.7
#
a = 34
originList = range(1, a+1)
tmpList = originList[:]
t = 0

while len(originList) > 1:
  for i, v in enumerate(originList):
    if (i+1+t) % 3 == 0:
      tmpList.remove(v)
  t = t + len(originList) % 3
  originList = tmpList[:]
  print t, originList

print originList[0] 