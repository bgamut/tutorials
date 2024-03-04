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
    if(newNumber>60){
      onChangeNumber(60)
    }
    else{
      setNumber(newNumber)
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
    const playNextBeat=()=>{
    // async function playNextBeat(){
    //   const {strong} = await Audio.Sound.creatAsync(require('./strong_pulse.wav'));
    //   const {weak}= await Audio.Sound.creatAsync(require('./weak_pulse.wav'));
      var timer
      console.log(currentBeat)
      if (currentBeat==1){
        console.log('strong')
        strong.play();
        // await strong.playAsync();
        //SoundPlayer.playSoundFile('strong_pulse','wav')
        //timer = setInterval(strong.pause(),interval/2.0)
        //clearInterval(timer)
      }else{
        console.log('weak')
        weak.play();
        //await weak.playAsync();
        //SoundPlayer.playSoundFile('weak_pulse','wav')
        //timer = setInterval(weak.pause(),interval/2.0)
       // clearInterval(timer)
      }
      
      setCurrentBeat((currentBeat)=>(currentBeat%4)+1);
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
        <Text
          style={styles.text}
        >
          bpm range 0 ~ 60
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
        
        <Button ref={buttonA} title={isPlaying? 'Stop Sound':'Play Sound'} onPress={toggleSound} />
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
    margin: 12,
    borderWidth: 1,
    //padding: 10,
  },
  text:{
    height: 40,
    backgroundColor: '#ecf0f1',
    margin:12,
  }
});
