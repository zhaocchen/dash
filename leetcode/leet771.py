# py2.7
# type J: str
# type S: str
# rtype: int
J = 'aA'
S = 'aAAbbbb'

res = 0

for x in S:
  if J.find(x) > -1:
    res += 1

print(res)