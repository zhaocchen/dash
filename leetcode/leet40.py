# py2
# combination-sum-ii

class Solution(object):
  def combinationSum2(self, candidates, target):
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
        if i > start and candidates[i] == candidates[i-1]:
          continue
        self.dfs(candidates, i+1, target-num, path+[num], res)

### 
if __name__ == "__main__":
  testData = [
    {
      'candidates': [10,1,2,7,6,1,5],
      'target': 8,
    },
    {
      'candidates': [2,5,2,1,2],
      'target': 5,
    },
  ]
  test = Solution()
  for item in testData:
    # print(item, item.get('candidates'), item.get('target'))
    test.combinationSum2(item.get('candidates'), item.get('target'))
