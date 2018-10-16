# py2.7
# draw rect

if __name__ == '__main__':
  from Tkinter import *

  canvas = Canvas(width=800, height=600, bg='#eee')
  canvas.pack(expand=YES, fill=BOTH)
  x0 = 400
  y0 = 300
  x1 = 400
  y1 = 300
  # canvas.create_line(x0, y0, x1, y1, width=1, fill='red')
  for i in range(0, 10):
    canvas.create_rectangle(x0 - i * 10, y0 - i * 10, x1 + i * 10, y1 + i * 10, width=1)

  mainloop()