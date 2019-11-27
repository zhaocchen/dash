#py2
#best-time-to-buy-and-sell-stock

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[init]
        :rtype: int
        """
        res = 0
        numLen = len(prices)
        for i in range(0, numLen):
            for j in range(i+1,numLen):
                if prices[i] < prices[j] and prices[j] - prices[i] > res:
                    res = prices[j] - prices[i]
        print res
        return res



if __name__ == '__main__':
    testData = [
        [7,1,5,3,6,4],
        [7,6,4,3,1],
    ]
    test = Solution()
    for item in testData:
        test.maxProfit(item)
