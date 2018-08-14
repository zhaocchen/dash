def fib(max):
  li = [1]
  len = max
  if len > 1:
    li.append(1)
    len -= 1
    for i in range(1, len):
      li.append(li[i-1] + li[i])
  return li

print fib(9)
