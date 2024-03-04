import simpleaudio, time

while True:
    simpleaudio.WaveObject.from_wave_file('strong_pulse.wav').play()
    time.sleep(2)
