from math import sqrt

def isPrime(num):
  max = int(sqrt(num+1))+1
  flag = True
  if num > 3:
    for i in range(2, max):
      if(num % i == 0):
        flag = False
        break
  return flag

res = []
for i in range(101, 200):
  if(isPrime(i)):
    res.append(i)
print res
print len(res)