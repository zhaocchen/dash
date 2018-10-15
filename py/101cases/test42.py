# py2.7

num = 3
def func():
  num = 0
  num += 1
  print 'function block: %d' % num

for i in range(3):
  num += 1
  print 'num = %d' % num
  func()