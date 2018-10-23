# py2.7

a = 34

def turnO(v):
  res = 0
  oldStr = str(v)
  for i in oldStr:
    res = res * 8 + int(i)
  return res

def turnOtoB(v):
  res = 0
  oldStr = str(v)
  for i in oldStr:
    res = res * 8 + int(i)
  return bin(res)
  
print turnO(122)
print turnOtoB(122)