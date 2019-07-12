

f1: 穷举

```
res = 0
i = 0
while i ** 2 <= x:
  res = i
  i += 1
```

f2: (n-1)/2

非负数n的平方根不超过（n/2+1）

f3: 二分法, 针对有序列表, 每次缩小一半目标

```
start = 0
end = 100
x = 8
while start < end:
  mid = (end - start) / 2
  if x > mid:
    start = mid
  else:
    end = mid
```

f4: 牛顿迭代法（求极限）

sum = x * x

反推x时,求极限, 推得：

x = (x+sum/x)/2



