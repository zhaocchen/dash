import datetime

print datetime.date.today()
print(datetime.date.today().strftime('%d,%m,%Y'))
print(datetime.date(1992,6,27).strftime('%d,%m,%Y'))
print((datetime.date(1992,6,27)+datetime.timedelta(days=1)).strftime('%d,%m,%Y'))

myDate = datetime.date(1992,6,27)
newDate = myDate.replace(year=myDate.year+1)
print(newDate.strftime('%d,%m,%Y'))