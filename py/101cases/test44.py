# py2.7

X = [[12,7,3],
    [4 ,5,6],
    [7 ,8,9]]

Y = [[5,8,1],
    [6,7,3],
    [4,5,9]]

newList = [[], [], []]

for i in range(3):
  for j in range(3):
    newList[i].append(X[i][j] + Y[i][j])
    # print X[i][j] + Y[i][j]

print newList