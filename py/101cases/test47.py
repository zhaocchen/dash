def ex(a, b):
  a,b = b,a
  return (a,b)

x = 1
y = 2

print 'x=%d, y=%d'%(x,y)
print 'x=%d, y=%d'%ex(x,y)