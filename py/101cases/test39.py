# insert a number into a sort list

oldList = [3, 9, 21, 25, 29, 37, 43, 49]

print('old list:'),
print(oldList)
a = int(raw_input('input a number fo insert:'))

newList = []

for i in range(len(oldList)):
  if a < oldList[i]:
    newList.append(a)
    newList += oldList[i:]
    break
  else:
    newList.append(oldList[i])

if len(newList) == len(oldList):
  newList.append(a)

print('new list: '),
print(newList)
