import datetime as dt
from time import sleep
from pynput import keyboard
def on_press(key):
    if key == keyboard.Key.esc:
        return False
with keyboard.Listener(on_press=on_press) as listener:
    while listener.running:
        
        print(dt.datetime.now())
        sleep(1) # Stop maxing out CPU
print("\nDone")
    
    


    
