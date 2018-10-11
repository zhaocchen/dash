# len
len = 11
indexArr = []
arr = [len]

for i in range(1, len):
    indexArr.append(len-i)
    if i > 0:
        tmp = arr.pop()
        arr.insert(0, tmp)
        arr.insert(0, len-i)

print indexArr
print arr