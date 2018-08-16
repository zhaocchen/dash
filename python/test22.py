teamA = ['a', 'b', 'c']
teamB = ['x', 'y', 'z']

# for i in teamA:
#     for j in teamB:
#         if not ((i == 'a' and j == 'x') or (i == 'c' and (j == 'x' or j == 'z'))):
#             print i,j

count = len(teamA)

for i in range(count):
    print i