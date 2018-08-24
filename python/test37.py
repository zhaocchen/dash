# py2
# select sort
# time o(n ^ 2)

def insertSort(alist):
  for i,alist_i in enumerate(alist):
    index = i
    while index > 0 and alist_i < alist[index-1]:
      alist[index] = alist[index-1]
      index -= 1
    alist[index] = alist_i
  return alist

def bubbleSort(alist):
  for i in range(len(alist)):
    for j in range(1, len(alist) - i):
      if alist[j-1] > alist[j]:
        alist[j-1], alist[j] = alist[j], alist[j-1]
  return alist

def mergeSort(alist):


def selectSort(alist):
  for i in range(len(alist)):
    min_index = i
    for j in range(i+1, len(alist)):
      if alist[j] < alist[min_index]:
        min_index = j
    alist[i], alist[min_index] = alist[min_index], alist[i]
  return alist     
    # for j in range(len(alist)):


unsorted_list = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]

print unsorted_list

# print insertSort(unsorted_list)
# print bubbleSort(unsorted_list)
print mergeSort(unsorted_list)
# print selectSort(unsorted_list)
