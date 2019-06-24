# py2.7
# median-of-two-sorted-arrays
# :type nums1: List[int]
# :type nums2: List[int]
# rtype: float

nums1 = [1, 3]
nums2 = [4, 2]

# step1: merge list
nums3 = nums1+nums2

# step2: sort list
nums3.sort()

# step3: fetch median 
lenofarr = len(nums3)

if lenofarr % 2 != 0:
  res = nums3[lenofarr/2]
else:
  plus = nums3[lenofarr/2] + nums3[lenofarr/2-1]
  res = float(plus) / 2

print res
