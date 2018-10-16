# py2.7
# draw special

if __name__=='__main__':
  from Tkinter import *

  canvas = Canvas(width=800, height=800, bg='#eee')
  canvas.pack(expand=YES, fill=BOTH)
  c = 400
  r = 300
  canvas.create_oval(c-r, c-r, c+r,c+r)

  # x0 = 400
  # y0=300
  # x1=400
  # y1=300
  # x=40
  # y=30
  # for i in range(6):
  #   canvas.create_oval(x0-x*i, y0-y*i, x1+x*i,y1+y*i)

  mainloop()