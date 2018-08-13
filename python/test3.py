# math

# import math

for i in range(1,85):
  if 168 % i == 0:
    j = 168 / i
    if i > j and (i+j)%2 == 0 and (i-j)%2 == 0:
      n = (i-j) /2
      print(n * n -100)
      