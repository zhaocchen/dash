
def getGrade(num):
  res = 'error'
  if num >= 0 and num <= 100:
    sourceLi = [90, 60, 0]
    gradeLi = ['A', 'B', 'C']
    for i in range(len(sourceLi)):
      if num >= sourceLi[i]:
        res = gradeLi[i]
        break
  return res

print getGrade(99)