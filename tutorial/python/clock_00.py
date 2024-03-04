import datetime as dt
from time import sleep

t = dt.datetime.now()
minute_count = 0 

while True:
    delta_minutes = (dt.datetime.now() -t).seconds / 60                
    if delta_minutes and delta_minutes != minute_count:
        print("1 Min has passed since the last print")
        minute_count = delta_minutes
    sleep(1) # Stop maxing out CPU