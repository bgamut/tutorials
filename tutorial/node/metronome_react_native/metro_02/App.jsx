import { useEffect, useState,useRef } from 'react';
import { View, StyleSheet, Button, SafeAreaView,TextInput,Text } from 'react-native';
//import { Audio } from 'expo-av';
import Sound from 'react-native-sound';
//import Audio from 'react-native-audio';
//import AudioRecorderPlayer from 'react-native-audio-recorder-player';
//import TrackPlayer from 'react-native-track-player';
//var AudioPlayer = require('react-native-audioplayer');
//import "./PlayerService";
//import { AudioPlayer } from 'react-native-audio-player-hooks';
//import AudioRecorderPlayer from 'react-native-audio-recorder-player';
//import SoundPlayer from 'react-native-sound-player'

//const audioRecorderPlayer = new AudioRecorderPlayer();
//import {BannerAd, BannerAdSize} from 'react-native-google-mobile-ads';

export default function App() {
  const [sound, setSound] = useState();
  const [number, setNumber]=useState('60');
  const [isPlaying,setIsPlaying]=useState(false);
  const [bpmInterval,setBpmInterval]=useState(1000);
  const [currentBeat, setCurrentBeat]=useState(1);
  const inputArea=useRef(null);
  const buttonA=useRef(null);

  Sound.setCategory('Playback')
  const strong = new Sound('strong_pulse.wav',Sound.MAIN_BUNDLE, (error)=>{
    if(error){
      console.log('Error loading Sound: '+error);
      return;
    }
  });
  const weak = new Sound('weak_pulse.wav',Sound.MAIN_BUNDLE, (error)=>{
    if(error){
      console.log('Error loading Sound: '+error);
      return;
    }
  });
  //const strong=Player('strong_pulse.wav')
  //const weak = Player('weak_pulse.wav')
  //const strong=SoundPlayer.loadSoundFile('strong_pulse','wav')

  //const weak=SoundPlayer.loadSoundFile('weak_pulse','wav')
  const onChangeNumber=(newNumber)=>{
    if(newNumber>360||newNumber==0){
      //onChangeNumber(60)
      //setNumber('60')
      //return
      setNumber('')
      setNumber(NaN)
    }
    else{
      setNumber(parseInt(newNumber))
    }
  }
 
  useEffect(()=>{
    console.log("setup")
    inputArea.current.focus()
  },[]);
  useEffect(()=>{
    var interval
    if(parseInt(number)==0||isNaN(parseInt(number))){
      if(isPlaying){
        toggleSound()
        console.log('turning off')
      }
    }
    else{ 
      interval=60/parseInt(number) *1000;
      console.log('interval = '+interval)
    }
    
    function sleep(ms){
      clearInterval(sleepSetTimeout_ctrl);
      return new Promise(resolve => sleepSetTimeout_ctrl = setTimeout(resolve, ms));
    }
    
    const playNextBeat= ()=>{
    // async function playNextBeat(){
    //   const {strong} = await Audio.Sound.creatAsync(require('./strong_pulse.wav'));
    //   const {weak}= await Audio.Sound.creatAsync(require('./weak_pulse.wav'));
      var timer
      console.log(currentBeat)
      if (currentBeat==1){
        console.log('strong')
        //strong.stop();
        strong.play();
        // await strong.playAsync();
        //SoundPlayer.playSoundFile('strong_pulse','wav')
        //timer = setInterval(strong.stop(),interval/2.0)
        //timer = setInterval(console.log('1 beat'),interval/2.0)
        //clearInterval(timer)
        //sleep(250)
        //await sleep(parseInt(interval/2.0))
        //strong.stop()
        //strong.stop()

      }else{
        console.log('weak')
        //weak.stop()
        weak.play();
        //await weak.playAsync();
        //SoundPlayer.playSoundFile('weak_pulse','wav')
        //timer = setInterval(weak.stop(),interval/2.0)
        //timer = setInterval(console.log('2,3,4 beat'),interval/2.0)
        //clearInterval(timer)
        //sleep(250)
        //weak.stop()
      }
      
      //setCurrentBeat((currentBeat)=>(currentBeat%4)+1);
    };
    let timer;
    if(isPlaying){
      timer = setInterval(playNextBeat, interval)
      return ()=>{
        clearInterval(timer);
      };
    }
    
  },[isPlaying,number,currentBeat]);

  const toggleSound=()=>{
    setCurrentBeat(1)
    setIsPlaying(!isPlaying);
  };

  

  
  return (
    
      <View style={styles.container}>
        {/*
        <BannerAd
          size={BannerAdSize.BANNER}
          unitId="ca-app-pub-5238507918606311~6541661886"  
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={error => {
            console.error('Advert failed to load: ', error);
          }}
        />
        */}
        <Text
          style={styles.text}
        >
          bpm range 0 ~ 360
        </Text>
        
        <TextInput
          autoFocus={true}
          ref={inputArea}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={"bpm"}
          inputMode="numeric"
          maxLength={3}
        >
        </TextInput>
        
        <Button disabled={isNaN(number)} ref={buttonA} title={isPlaying? 'Stop':'Play'} onPress={toggleSound} />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  input: {
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    textAlign: 'center',
    //padding: 10,
  },
  text:{
    height: 35,
    backgroundColor: '#ecf0f1',
    //margin:12,
    textAlign: 'center',
  }
});
