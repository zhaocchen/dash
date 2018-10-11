## halve

high = 100.0
count = 10

sum = high
high /= 2
for i in range(count-1):
    print(str(high)+','),
    sum +=  2 * high
    high /= 2

print
print sum
