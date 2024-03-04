import datetime as dt
from time import sleep
'''
t = dt.datetime.now()
minute_count = 0 
'''
while True:
    '''
    delta_minutes = (dt.datetime.now() -t).seconds / 60
    print(delta_minutes)             
    if delta_minutes >=1.0:
        print("1 Min has passed since the last print")
        minute_count = delta_minutes
        t = dt.datetime.now()
    '''
    print(dt.datetime.now())
    sleep(1) # Stop maxing out CPU