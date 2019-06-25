# py2.7
# Search in Rotated Sorted Array
# :type nums: List[int]
# :type target: int
# :rtype: int

################################################
def bs(arr, x):
  left = 0
  right = len(arr) - 1
  res_index = -1
  while left <= right:
    mid = left + (right-left)/2
    if arr[mid] == x:
      res_index = mid
      break
    elif arr[mid] < x:
      left = mid + 1
    else:
      right = mid - 1
  return res_index
##################################

nums = [6,1,3,5]
target = 3
res = -1

len_nums = len(nums)
if len_nums == 1 and target == nums[0]:
  res = 0
elif len_nums > 1:
  # step1, position index of rotate
  rotate_index = -1
  for i in range(len_nums-1):
    if nums[i+1] < nums[i]:
      rotate_index = i
      break
  if rotate_index == -1:
    res = bs(nums, target)
  else:
    # step2, fetch an ordered list
    if target == nums[0]:
      res = 0
    elif target > nums[0]:
      new_nums = nums[1:rotate_index+1]
      res = bs(new_nums, target)
    else:
      new_nums = nums[rotate_index+1:]
      res = bs(new_nums, target)
      if res != -1:
        res = res + rotate_index + 1

print res
