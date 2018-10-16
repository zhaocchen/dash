# py2.7
# draw specil

if __name__ == '__main__':
  from Tkinter import *

  canvas = Canvas(width=600, height=600, bg='#eee')
  canvas.pack(expand=YES, fill=BOTH)
  x0 = 300
  y0 = 300
  x1 = 300
  y1 = 300
  rList = [10, 20, 50, 60]
  # draw circle
  for i in range(3):
    canvas.create_oval(x0 - rList[i], y0 - rList[i], x1 + rList[i], y1 + rList[i], width=1)
  import math
  B = 0.809
  for i in range(16):
    a = 2 * math.pi / 16 * i
    x = math.ceil(x0 + 48 * math.cos(a))
    y = math.ceil(y0 + 48 * math.sin(a) * B)
    canvas.create_line(x0, y0, x, y, fill='red')
  canvas.create_oval(x0 - rList[3], y0 - rList[3], x1 + rList[3], y1 + rList[3], width=1)

  for k in range(501):
    for i in range(17):
      a = (2 * math.pi / 16) * i + (2 * math.pi / 180) * k
      x = math.ceil(x0 + 48 * math.cos(a))
      y = math.ceil(y0 + 48 + math.sin(a) * B)
      canvas.create_line(x0,y0,x,y,fill = 'yellow')
    for j in range(51):
      a = (2 * math.pi / 16) * i + (2* math.pi / 180) * k - 1
      x = math.ceil(x0 + 48 * math.cos(a))
      y = math.ceil(y0 + 48 * math.sin(a) * B)
      canvas.create_line(x0,y0,x,y,fill = '#3DBE1A')
  mainloop()