from tkinter import *

# Create an instance of tkinter frame or window
win = Tk()

win.geometry("110x33")
win.title("")

def on_click():
    if(b.cget('text')=="Update Label"):
        b.config(text="hello world")
    else:
        b.config(text="Update Label")

b = Button(win, text="Update Label", command=on_click)
b.pack(pady=0)

win.mainloop()
