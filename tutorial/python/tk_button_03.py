# Import the required libraries
from tkinter import *

# Create an instance of tkinter frame or window
win = Tk()

# Set the size of the tkinter window
win.geometry("400x100")
win.title("Click Button")
"""
# Create a label widget
label = Label(win, text="Update Title",
font=('Calibri 15 bold'))
label.pack(pady=20)
"""

# Define a function update the label text
def on_click():
   """if label.cget("text")=="Update Label":
      label["text"]="Hello World"
   else:
      label["text"] = "Update Label"
   """
   if win.title()=="Click Button":
      win.title("Hello World")
   else:
      win.title("Click Button")
# Create a button to update the label widget
b = Button(win, text="Update title", command=on_click)
b.pack(pady=20)

win.mainloop()
