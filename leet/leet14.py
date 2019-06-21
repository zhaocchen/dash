# py2.7
# longest-common-prefix
# type strs: List[str]
# rtype: str

# strs = ["abab","aba",""]
# strs = ["ala","a"]
strs = ["flower","flow","flight"]

res = ''

if len(strs) > 0:
  res = strs[0]  
  for (i, v) in enumerate(strs):
    minLen = min(len(res), len(v))
    if minLen == 0:
      res = ''
      break 
    elif i > 0:
      for j in range(minLen):
        if res[j] != v[j]:
          res = res[:j]
          break
        if j + 1 == len(v):
          res = res[:j+1]
          break

print res