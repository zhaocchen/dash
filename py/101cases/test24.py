# py2
# fib

def fib(count):
  a = 1.0
  b = 1.0
  res = 1.0
  if count > 2:    
    for i in range(2, count):
      res = a + b
      a,b = b,res
  # print res
  return res

# fib(5)

sum = 0
for index in range(20):
  sum += fib(index+3)/fib(index+2)
  print fib(index+3),fib(index+2)

print sum