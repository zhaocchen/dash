# py 2.7
# if txt not exit , it will creat at first

# write
fp = open('test1.txt', 'w')
fp.write('hello-')
fp.close

fp = open('test2.txt', 'w')
fp.write('word')
fp.close

# read
fp = open('test1.txt')
a = fp.read()
fp.close()
fp = open('test2.txt')
b = fp.read()
fp.close()

fp = open('test3.txt', 'w')
fp.write(a+b)
fp.close

# print a,b

print 'finish write in a txt'


