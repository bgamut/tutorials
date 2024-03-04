import simpleaudio, time,sys
from pynput import keyboard

strong_beat = simpleaudio.WaveObject.from_wave_file('strong_pulse.wav')
weak_beat = simpleaudio.WaveObject.from_wave_file('weak_pulse.wav')
count=0
def on_press(key):
    if key== keyboard.Key.esc:
        return False
print(sys.argv[1])
with keyboard.Listener(on_press=on_press) as listener:
    while listener.running:
        count=count+1
        if count==1:
            strong_beat.play()
        else:
            weak_beat.play()
        if count == 4:
            count=0
        time.sleep(60/int(sys.argv[1]))
print("\nexiting")