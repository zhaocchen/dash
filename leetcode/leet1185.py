# py2
# day-of-the-week

class Solution(object):
    def dayOfTheWeek(self, day, month, year):
        """
        :type day: int
        :type month: int
        :type year: int
        :rtype: str
        """
        res = None
        weekList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        d = day
        m = month
        y = year
        if m < 3:
            m += 12
            y -= 1
        c = y / 100      
        y = y % 100
        w = ((c / 4) - 2 * c + y + y / 4 + 13 * (m + 1) / 5 + d - 1) % 7
        res = weekList[w]
        print day, month, year, w, weekList[w]
        # print c
        return res

if __name__ == "__main__":
    testData =  [
        {
            "day": 31,
            "month": 8,
            "year": 2019,
            "res": 'Saturday',
        },
        {
            "day": 18,
            "month": 7,
            "year": 1999,
            "res": 'Sunday',
        },
        {
            "day": 15,
            "month": 8,
            "year": 1993,
            "res": 'Sunday',
        },
        {
            "day": 29,
            "month": 2,
            "year": 2016,
            "res": '"Monday"',
        },
    ]
    test = Solution()
    for d in testData:
        # print d
        print test.dayOfTheWeek(d.get('day'), d.get('month'), d.get('year'))