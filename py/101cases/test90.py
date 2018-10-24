# py2.7
# what is list

list1 = [1, 2, 3, 4, 5]
list2 = ['a', 'b', 'c', 'd']
list3 = [1, 'b', 3, 'd']

# print '-------length of string-------'
# print len(list1)
# print list1.__len__()


# print '---------copy will change----------' 
# list4 = list1
# list4[0] = 9
# print list1

# print '---------deep copy---------'
# list5 = list1[2:4]
# print list5
# list5[0] = 5
# print list5
# print list1

# print '--------function------'
# print 'max()', max(list1)
# print 'min()', min(list1)
# print 'cmp()', cmp(list1, list2)
# print list(str(888888))
# print list('hello')

# print '--------method------'
# print 'index()', list1.index(5)
# print 'count()', list1.count(2)

print '-----change list-----'
print 'old list:', list1
list1.append(12)
print 'append()', list1
list1.insert(3, 13)
print 'insert()', list1
list1.extend([21, 22])
print 'extend()', list1
list1.remove(13)
print 'remove()', list1
list1.pop(1)
print 'pop()', list1
list1.reverse()
print 'reverse()', list1
list1.sort()
print 'sort()', list1
list1.sort(reverse=True)
print 'sort(dec)', list1

