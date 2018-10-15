# py2.7
# sum of main diagonal

triArr = [[], [], []]

for i in range(3):
  for j in range(3):
    triArr[i].append(float(raw_input('input: ')))
print triArr
print('sum of main diagonal:'),
print(triArr[0][0]+triArr[1][1]+triArr[2][2])

  