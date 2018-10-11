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


class MergeSort:
  def sort(self,alist):
    if len(alist) <= 1:
      return alist
    else:
      mid = len(alist) / 2
      left = self.sort(alist[:mid])
      right = self.sort(alist[mid:])
      return self.mergeList(left, right)
  def mergeList(self, left, right):
    tmpList = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
      if left[i] < right[j]:
        tmpList.append(left[i])
        i += 1
      else:
        tmpList.append(right[j])
        j += 1
    tmpList += left[i:]
    tmpList += right[j:]
    return tmpList

def bucketSort(alist):
  buckets = [0] * (max() - min() + 1)
  return alist

def selectSort(alist):
  for i in range(len(alist)):
    min_index = i
    for j in range(i+1, len(alist)):
      if alist[j] < alist[min_index]:
        min_index = j
    alist[i], alist[min_index] = alist[min_index], alist[i]
  return alist     
    # for j in range(len(alist)):


unsorted_list = [29, 25, 3, 49, 9, 37, 21, 43]

print unsorted_list

# print insertSort(unsorted_list)
# print bubbleSort(unsorted_list)
print MergeSort().sort(unsorted_list)
# print selectSort(unsorted_list)
