# py2

class Solution(object):
    def maximumSum(self, arr):
        """
        :type arr: List[int]
        :rtype: int
        """
        res = None
        arr.sort()
        max1 = arr[-1:][0]
        arr.pop(0)
        max2 = sum(arr)
        # print arr, max1, max2
        return max(max1, max2)

if __name__ == "__main__":
    testData =  [[1,-2,0,3]]
    test = Solution()
    for d in testData:
        # print d
        print test.maximumSum(d)