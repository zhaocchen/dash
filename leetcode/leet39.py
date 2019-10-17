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
    print(candidates)
  def dfs(self):
    return 1


if __name__ == "__main__":
  testData = [
    {
      'candidates': [3,2,6,7],
      'target': 7,
    },
  ]
  test = solution()
  for i in testData:
    print(i, i.get('candidates'), i.get('target'))
    test.combination([3,2,6,7], 7)
