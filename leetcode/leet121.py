#py2
#best-time-to-buy-and-sell-stock

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[init]
        :rtype: int
        """
        if len(prices) < 2:
            return 0
        res = 0
        minPrice = prices[0]
        numLen = len(prices)
        for price in prices:
            # print(i)
            if price < minPrice:
                minPrice = price
            elif price - minPrice > res:
                res = price - minPrice
        print res
        return res



if __name__ == '__main__':
    testData = [
        [7,1,5,3,6,4],
        [7,6,4,3,1],
        [6,2,7,1,5,4]
    ]
    test = Solution()
    for item in testData:
        test.maxProfit(item)
