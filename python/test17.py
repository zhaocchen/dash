str = raw_input('input string:\n')

letters = 0
space = 0
digit = 0
other = 0

for i in str:
  if i.isalpha():
    letters += 1
  elif i.isspace():
    space += 1
  elif i.isdigit():
    digit += 1
  else:
    other += 1

print 'char=%d,\nspace=%d,\ndigit=%d,\nothers=%d'%(letters, space, digit, other)