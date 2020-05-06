# py2
# combination-sum

class Solution(object):
  def combinationSum(self, candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    if not candidates:
      return []
    res = []
    candidates.sort()
    self.dfs(candidates, 0, target, [], res)
    print(res)
    return res
  def dfs(self, candidates, start, target, path, res):
    if target == 0:
      res.append(path)
    else:      
      for i in range(start, len(candidates)):
        num = candidates[i]
        if num > target:
          return
        self.dfs(candidates, i, target-num, path+[num], res)

### 
if __name__ == "__main__":
  testData = [
    {
      'candidates': [3,2,6,7],
      'target': 7,
    },
    {
      'candidates': [2,3,5],
      'target': 8,
    },
  ]
  test = Solution()
  for item in testData:
    # print(item, item.get('candidates'), item.get('target'))
    test.combinationSum(item.get('candidates'), item.get('target'))
