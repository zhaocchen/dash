
# year = int(raw_input('year:\n'))
# month = int(raw_input('month:\n'))
# day = int(raw_input('day:\n'))
year = 2018
month = 2
day = 3

# 31[1,3,5,7,8,10,12]
daysList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
count = day
for i in range(month-1):
  count += daysList[i]
if month > 2 and ((year % 400 == 0) or (year % 4 == 0 and year%100 != 0)):
  count += 1
print count
