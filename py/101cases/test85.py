# py2.7

# a = 13
# a = int(raw_input('input an odd number:'))
a = input('input an odd number:')
count = 0
flag = True

# check odd
if a % 2 == 0:
  print 'error input!'
  flag = False

while flag and count < 100:
  count += 1
  if int('9' * count) % a == 0:
    flag = False
    break

if count == 100:
  print 'no found between 1-100!'
else:
  print count