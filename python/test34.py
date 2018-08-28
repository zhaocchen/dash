def funChild():
    print 'child'

def funPar():
    for i in range(3):
        funChild()

funPar()