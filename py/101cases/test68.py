# py 2.7
# shift m

a = [29, 25, 3, 49, 9, 37, 21, 43]
m = 3
b = a[len(a)-m:len(a)] +a[0:len(a)-m]
# b = a[0:len(a)-m]

print b