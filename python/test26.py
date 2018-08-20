# py2

def accuMultiplyRecu(count):
  res = 1
  if count > 1:
    res = count * accuMultiplyRecu(count - 1)
  return res

print accuMultiplyRecu(5)