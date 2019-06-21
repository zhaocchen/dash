# py2.7
# type x:str
# rtype: str

# x = raw_input("input a string:")
x = "A man, a plan, a canal: Panama"

a = x
b = list(reversed(list(a)))
b = "".join(b)

print b