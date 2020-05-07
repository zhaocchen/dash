# py2.7
# search-in-rotated-sorted-array-ii

class Solution(object):
  def search(self, nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: bool
    """
    res = False
    rotate_index = -1
    if len(nums) == 0:
      return False
    elif len(nums) == 1:
      if nums[0] == target:
        return True
      else:
        return False
    for i in range(len(nums) -1):
      if nums[i] > nums[i+1]:
        rotate_index = i
        break
    # print rotate_index
    min = nums[0]
    max = nums[len(nums) - 1]
    if rotate_index > -1:
      min = nums[rotate_index+1]
      max = nums[rotate_index]
    if target > max and target < min:
      return False
    start_index = 0
    end_index = len(nums) - 1
    if rotate_index > -1:
      if target >= nums[0]:
        end_index = rotate_index
      else:
        start_index = rotate_index + 1
    # print start_index, end_index
    while(start_index <= end_index):
      mid_index = (end_index+start_index)/2
      cur_num = nums[mid_index]
      if target == nums[mid_index]:
        return True
      elif target < cur_num:
        end_index = mid_index - 1
      else:
        start_index = mid_index + 1
    return res
   
if __name__ == "__main__":
  testData = [
    # {
    #   'nums': [0,0,1,2,2,5,6],
    #   'target': 7,
    # },
    # {
    #   'nums': [0,0,1,2,2,5,6],
    #   'target': 2,
    # },
    # {
    #   'nums': [2,5,6,0,0,1,2],
    #   'target': 0,
    # },
    {
      'nums': [2,5,6,0,0,1,2],
      'target': 3,
    },
    # {
    #   'nums': [4,5,6,7,0,1,2],
    #   'target': 6,
    # },
    # {
    #   'nums': [4,5,6,7,0,1,2],
    #   'target': 6,
    # }
  ]
  test = Solution()
  for item in testData:
    print item.get('nums')
    print test.search(item.get('nums'), item.get('target'))