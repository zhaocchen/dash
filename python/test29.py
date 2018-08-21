n = raw_input('input:\n')

if len(n) < 6:
    strLen = len(n)
    numList = []
    for i in n:
        numList.append(i)
    print('%d length\n' % (strLen))
    print numList[::-1]
else:
    print "input error"