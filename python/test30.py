# py2

def idPlalindrome(str):
  flag = True
  for i in range(len(str)/2):
    if str[i] != str[len(str) - i]:
      flag = False
      break
  return flag

print idPlalindrome('12321')