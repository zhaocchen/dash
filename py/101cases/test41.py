# Static
class Static:
  count = 0
  def increase(self):
    self.count += 1
    print self.count

a = Static()
for i in range(3):
  a.increase()
