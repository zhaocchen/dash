# py2.7
# time

import time

ts = time.time()

print ts
print 'asctime', time.asctime(time.localtime(ts))
print 'localtime', time.localtime(ts)
print 'gmtime', time.gmtime(ts)

print '----clock----'
start = time.clock()
count = 0
for i in range(1000):
  count += 1
end = time.clock()
print end



