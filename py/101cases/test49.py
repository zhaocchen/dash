# py2.7
# lambda

MAX = lambda x,y : (x > y) * x + (x <= y) * y
MIN = lambda x,y : (x > y) * y + (x <= y) * x

print MAX(2, 4)
print MAX(2, 2)
print MAX(6, 2)
print MIN(2, 4)
print MIN(2, 2)
print MIN(6, 2)