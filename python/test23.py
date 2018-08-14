from sys import stdout

len = 4
for i in range(4):
  stdout.write((len-i) * ' ' + (2 * i - 1) * '*' + '\n')
for i in range(4):
  stdout.write(i * ' ' + (2 * (len-i) - 1) * '*' + '\n')
print