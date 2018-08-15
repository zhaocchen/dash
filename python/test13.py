res = []

for index in range(101, 1000):
  i = int(index / 100)
  j = int(index % 100 / 10)
  k = int(index % 100 % 10)
  if (i ** 3 + j ** 3 + k ** 3) == index:
    res.append(index)
  
print res
print len(res)