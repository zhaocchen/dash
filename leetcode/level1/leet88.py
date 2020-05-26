# py2
# merge-sorted-array

class Solution(object):
  def merge(self, nums1, m, nums2, n):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :type m: int
    :type n: int
    :rtype: None Do not return anything, modify nums1 in-place instead.
    """
    list1 = nums1[:m]
    list2 = nums2[:n]
    i, j = 0, 0
    nums1[:] = []
    # print list1, list2
    while i < len(list1) and j < len(list2):
      # list1[i] > list2[j]
      if list1[i] > list2[j]:
        nums1.append(list2[j])
        j += 1
      else:
        nums1.append(list1[i])
        i += 1
      # print nums1
    if i < len(list1):
      nums1[i+j:] = list1[i:]
    if j < len(list2):
      nums1[i+j:] = list2[j:]
    print nums1

if __name__ == "__main__":
  testData = [
    [[1,2,3,0,0,0], 3, [2,5,6], 3]
  ]
  test = Solution()
  for i in testData:
    print i
    test.merge(i[0], i[1], i[2], i[3])


