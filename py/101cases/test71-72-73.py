# py 2.7
# record info of students

stu = []

for i in range(2):
  if i > 0:
    print '--------next studnet------'
  dict = {}
  dict['name'] = raw_input('input name:')
  dict['age'] = raw_input('input age:')
  dict['female'] = raw_input('input name:(y/n)') 
  stu.append(dict)

print stu