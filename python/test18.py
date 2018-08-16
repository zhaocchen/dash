a = int(raw_input('a:'))
n = int(raw_input('n:'))

res = 0
for i in range(1, n+1):
  # use i * str, then turn int
  res += int(i * str(a))
  print int(i * str(a))

print res