# py2


def accuMultiply(count):
  res = 1
  if count > 1:
    for i in range(2, count+1):
      res *= i
  return res

s = 0
for i in range(20):
  s += accuMultiply(i+1)

print '1! + 2! + 3! + ... + 20! = %d' % s