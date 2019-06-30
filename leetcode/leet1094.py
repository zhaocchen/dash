# py2
# car-pooling

class Solution(object):
    def carPooling(self, trips, capacity):
        """
        :type trips: List[List[int]]
        :type capacity: int
        :rtype: bool
        """
        res = True

        statList = [0 for i in range(1001)]

        for tmpList in trips:
          [pepoleCount, startIndex, endIndex] = tmpList
          # first out then in
          for curIndex in range(startIndex, endIndex):
            statList[curIndex] += pepoleCount
            res = statList[curIndex] <= capacity
            # print res
            if bool(1-res):
              break
          if bool(1-res):
            break
        return res

if __name__ == '__main__':
  test = Solution()
  print test.carPooling([[3,2,7],[3,7,9],[8,3,9]], 11)

