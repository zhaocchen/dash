# py2.7
# sum
a = int(raw_input('input a:'))
# a = 2

s = 1
if a % 2 == 0:
  s = 2

res = 0

for i in range((a-s)/2+1):
  res += 1.0 / s
  s += 2

print res