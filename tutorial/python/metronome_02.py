import simpleaudio, time,sys


strong_beat = simpleaudio.WaveObject.from_wave_file('strong_pulse.wav')
weak_beat = simpleaudio.WaveObject.from_wave_file('weak_pulse.wav')
count=0
print(sys.argv[1])
while True:
    count=count+1
    if count==1:
        strong_beat.play()
    else:
        weak_beat.play()
    if count == 4:
        count=0
    time.sleep(60/int(sys.argv[1]))
