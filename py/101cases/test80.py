# py2.7
# 

index = 1
res = index
flag = True

while flag:
  for i in range(4):
    res = res * 5 +1
    if res % 4 != 0:
      index += 1
      res = index
      flag = True
      break
    else:
      res = res / 4
      flag = False

res = res * 5 +1

print res