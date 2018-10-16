# py2.7
# print pascal's triangle

res = []
# init
for i in range(10):
  res.append([1] * (i+1))

# pad value
for i in range(10):
  for j in range(i+1):
    if i > 1 and j > 0 and j <= (i / 2):
      res[i][j] = res[i-1][j-1] + res[i-1][j]
      res[i][i-j] = res[i-1][j-1] + res[i-1][j]
  print res[i]

# print res