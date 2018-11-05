# py2.7
# two-sum
# :type nums: List[int]
# :type target: int
# :rtype: List[int]

# nums = [2, 7, 11, 15]
# target = 9
# nums = [-1,-2,-3,-4,-5]
# target = -8
nums = [3,3]
target = 6
res = False
maxIndex = len(nums) - 1
for i, v in enumerate(nums):
  remainder = target-v
  newLsit = nums[i+1:]
  if i<maxIndex and remainder in newLsit:
    res = [i, newLsit.index(remainder)+i+1]
    break

print res
