# py2
# perfect-number

class Solution(object):
    def checkPerfectNumber(self, num):
        """
        :type num: int
        :rtype: bool
        """
        perfectNums = [6, 28, 496, 8128, 33550336]
        res = num in perfectNums
        print res
        return res

if __name__ == '__main__':
    testData = [
        28
    ]
    test = Solution()
    for item in testData:
        # print item
        test.checkPerfectNumber(item)
