# py2.7
# type x: int
# rtype: int

x = -3455

rMax = pow(2, 31)
# negative
isNegative = x < 0
res = list(str(abs(x)))
res.reverse()
res = "".join(res)
res = int(res)
if res > 0 and isNegative:
  res = -res

# check
if res < -rMax or res > rMax-1:
  res = 0

print type(res)
print res