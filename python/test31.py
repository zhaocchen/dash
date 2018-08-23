weekList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

letter_st = raw_input('input first letter:\n')[0]
if letter_st != 's':
  for i in weekList[0:4]:
    if letter_st == i[0]:
      print i
      break
elif letter_st == 's':
  letter_ed = raw_input('input second letter:\n')[0]
  for i in weekList[5:7]:
    if letter_ed == i[1]:
      print i
      break
