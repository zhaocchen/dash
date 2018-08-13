# raw_input

i = int(raw_input('input:'))
threshold = [100,60,40,20,10,0]
rate = [0.01,0.015,0.03,0.05,0.075,0.1]
r = 0
for index in range(1,6):
  if i > threshold[index]:
    tmp = (i-threshold[index])*rate[index]
    r +=  tmp
    i = threshold[index]
    print r
# print type(i)
# print r