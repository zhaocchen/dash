# py2.7

class Count:
  nNum = 0
  def increase(self):
    self.nNum += 1
    print 'static nNum: %d' % self.nNum

nNum = 2
inc = Count()
for i in range(3):
  nNum += 1
  print 'out nNum: %d' % nNum
  inc.increase()


  