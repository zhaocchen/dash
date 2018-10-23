# py2.7
# change min in first, change max in last

a = [29, 25, 3, 49, 9, 37, 21, 43]

min = min(a)
max = max(a)

a.remove(min)
a.insert(0, min)
a.remove(max)
a.append(max)

print a