# py2.7
# type: int
# rtypr: boolean
x = 2342
xList = list(str(x))
flag = True

xLen = len(xList)
subLen = xLen / 2

for i in range(subLen):
  if xList[i] != xList[xLen -1 -i]:
    flag = False
    break

print flag