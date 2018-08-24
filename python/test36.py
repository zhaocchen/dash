# prime [1, 100]
# time 0.247

max = 100
composite = []
for i in range(2, max+1):
  for j in range(2, max+1):
    if i * j <= max:
      composite.append(i * j)

res = set(range(1, max)) - set(composite)
print res