
person = {'li': 12, 'eee': 4, 'zhang': 89, 'liu': 56}
m = person.keys()[0]

for key in person.keys():
  if person[key] > person[m]:
    m = key
print m