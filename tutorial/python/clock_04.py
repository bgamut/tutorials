import datetime as dt
from time import sleep
from pynput import keyboard
import os

def on_press(key):
    if key== keyboard.Key.esc:
        return False

with keyboard.Listener(on_press=on_press) as listener:
    while listener.running:
        os.system('clear')
        print(str(dt.datetime.now().hour)+" : "+str(dt.datetime.now().minute)+" : "+ str(dt.datetime.now().second))
        sleep(1) # Stop maxing out CPU
print("\nexiting")