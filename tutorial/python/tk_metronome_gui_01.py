import tkinter as tk
window= tk.Tk()

window.rowconfigure(0, minsize=50, weight=1)
window.columnconfigure([0, 1, 2], minsize=50, weight=1)

def increase():
    value = int(lbl_value["text"])
    if value==120:
        value=60
        lbl_value["text"] = f"{value}"
    else:
        lbl_value["text"] = f"{value + 1}"

def decrease():
    value = int(lbl_value["text"])
    if value==60:
        value=120
        lbl_value["text"]=f"{value}"
    else:
        lbl_value["text"] = f"{value - 1}"
    
btn_decrease = tk.Button(master=window, text="-", command=decrease)
btn_decrease.grid(row=0, column=0, sticky="nsew")

lbl_value = tk.Label(master=window, text="120")
lbl_value.grid(row=0, column=1)

btn_increase = tk.Button(master=window, text="+", command=increase)
btn_increase.grid(row=0, column=2, sticky="nsew")

window.mainloop()
