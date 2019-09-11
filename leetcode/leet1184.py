# py2
# distance-between-bus-stops

class Solution(object):
    def distanceBetweenBusStops(self, distance, start, destination):
        """
        :type distance: List[int]
        :type start: int
        :type destination: int
        :rtype: int
        """
        [up, down] = [min(start, destination), max(start, destination)]
        path1 = distance[up: down]
        disLen = len(distance)
        newDistance = distance + distance
        path2 = newDistance[down: up + disLen]
        # print path1, path2, sum(path1), sum(path2), min(sum(path1), sum(path2))
        return min(sum(path1), sum(path2))

if __name__ == "__main__":
    testData =  [
        {
            'distance': [1,2,3,4],
            'start': 0,
            'destination': 3,
        },
        {
            'distance': [7,10,1,12,11,14,5,0],
            'start': 7,
            'destination': 2,
        }
    ]
    test = Solution()
    for d in testData:
        # print d
        print test.distanceBetweenBusStops(d.get('distance'), d.get('start'), d.get('destination'))