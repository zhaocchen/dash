# py2.7

a = 1234

text = list(str(a))

for i, v in enumerate(text):
    text[i] = str((int(v)+5) % 10)
    # print (int(v)+5) % 10

print text

# change item
for i in range(2):
  text[i],text[3-i] = text[3-i],text[i]

print ''.join(text)

