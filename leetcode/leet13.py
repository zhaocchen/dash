# py2
# roman-to-integer

class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        sLen = len(s)
        if sLen == 0:
            return 0
        elif sLen == 1:
            return romanMap[s]
        nums = [romanMap[i] for i in s]
        print nums
        res = 0
        for i in range(sLen - 1):
            if nums[i] < nums[i+1]:
                res -= nums[i]
            else:
                res += nums[i]
        res += nums[-1]
        # print res
        return res

if __name__ == '__main__':
    testData = [
        "III",
        "IV",
        "IX",
        "LVIII",
        "MCMXCIV"
    ]
    test = Solution()
    for item in testData:
        print test.romanToInt(item)
