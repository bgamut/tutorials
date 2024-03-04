import tkinter as tk
import simpleaudio,time
window= tk.Tk()

#window.rowconfigure(0, minsize=50, weight=1)
#window.columnconfigure([0, 1, 2], minsize=50, weight=1)
window.rowconfigure(0, minsize=50, weight=1)
window.columnconfigure([0, 1, 2], minsize=150, weight=1)
value=120
#value = int(lbl_value["text"])
strong_beat = simpleaudio.WaveObject.from_wave_file('strong_pulse.wav')
weak_beat = simpleaudio.WaveObject.from_wave_file('weak_pulse.wav')
count=0
def beat_sound():
    global count
    global strong_beat
    global weak_beat
    global value
    if count==0:
        strong_beat.play()
        #print(count)
        print("count first")
        count=count+1    
    else:
        print("count middle")
        weak_beat.play()
        #print(count)
        count=count+1
        if count==4:
            count=0
    
    #time.sleep(bpm/60)
    window.after(int(60000/value),beat_sound)
    
        
def increase():
    global value
    value =int(lbl_value["text"])
    if value==120:
        value=60
        #bl_value["text"] = f"{value}"
        lbl_value["text"] = value
    else:
        #lbl_value["text"] = f"{value + 1}"
        lbl_value["text"] = value+1
        value=value+1
    print(value)
    #beat_sound(value)
    

def decrease():
    global value
    value=int(lbl_value["text"])
    if value==60:
        value=120
        #lbl_value["text"]=f"{value}"
        lbl_value["text"] = value
    else:
        #lbl_value["text"] = f"{value - 1}"
        lbl_value["text"] = value-1
        value=value-1
    print(value)
    #beat_sound(value)
    


    
    
btn_decrease = tk.Button(master=window, width=15, height=10, text="-", command=decrease)
btn_decrease.grid(row=0, column=0, sticky="nsew")

lbl_value = tk.Label(master=window, width=15, height=10, text="120")
lbl_value.grid(row=0, column=1)

btn_increase = tk.Button(master=window, width=15, height=10, text="+", command=increase)
btn_increase.grid(row=0, column=2, sticky="nsew")
window.after(0,beat_sound)
window.mainloop()
