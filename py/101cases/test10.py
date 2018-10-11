import time
print time.time()
time.sleep(2)
print time.localtime(time.time())
time.sleep(2)
print time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))