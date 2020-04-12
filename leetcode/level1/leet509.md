关于斐波那契数列引起的思考

- (暴力)递归实现: 636ms+11.7MB

时间复杂度,

```
def fib(N):
  if N < 1:
    return 0
  elif N < 3:
    return 1
  return fib(N-1) + fib(N-2)
```

- 迭代：20ms+11.8MB

时间复杂度,

```
def fib(N):
  if N < 1:
    return 0
  elif N < 3:
    return 1
  tmp = [1,1]
  i = 3
  while i <= N:
    tmp = [tmp[-1], tmp[0]+tmp[-1]]
    i += 1
  return tmp[-1]
```

- 带备忘录的递归, 32ms+11.7MB

时间复杂度,

```
def fib(N):
  memo = [None for i in range(N+1)]
  return helper(memo, N)
def helper( memo, N):
  if N < 1:
    return 0
  elif N < 3:
    return 1
  if memo[N] is not None:
    return memo[N]
  memo[N] = helper(memo, N-1) + helper(memo, N-2)
  print memo
  return memo[N]
```

- 动态规划: 24ms+11.8MB

时间复杂度,

```
def fib(N):
  if N < 1:
    return 0
  elif N < 3:
    return 1
  dp = [None for i in range(N+1)]
  dp[0] = 0
  [dp[1], dp[2]] = [1, 1]
  i = 3
  while i <= N:
    dp[i] = dp[i-1] + dp[i-2]
    i += 1
  return dp[-1]
```