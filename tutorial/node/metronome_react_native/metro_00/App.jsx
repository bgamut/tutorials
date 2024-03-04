import { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
//import { Audio } from 'expo-av';
import Sound from 'react-native-sound';
//import TrackPlayer from 'react-native-track-player';
//var AudioPlayer = require('react-native-audioplayer');
//import "./PlayerService";
//import { AudioPlayer } from 'react-native-audio-player-hooks';
//import AudioRecorderPlayer from 'react-native-audio-recorder-player';

//const audioRecorderPlayer = new AudioRecorderPlayer();
export default function App() {
  const [sound, setSound] = useState();

  // async function playSound() {
  //   console.log('Loading Sound');
  //   const { sound } = await Audio.Sound.createAsync( require('./assets/strong_pulse.wav')
  //   );
  //   setSound(sound);

  //   console.log('Playing Sound');
  //   await sound.playAsync();
  // }
  //function playSound(){
    // Sound.enable(false);
    // Sound.prepare('./assets/strong_pulse.wav');
    // Sound.play();
  //}
  // const playSound = async()=>{
  //   await TrackPlayer.setupPlayer();
  //   await TrackPlayer.add({
  //     url: require('./assets/strong_pulse.wav')
  //   });
  //   await TrackPlayer.play()
  // }
    // function playSound(){
    //   AudioPlayer.play()
    // }
  Sound.setCategory('Playback')
  const strong = new Sound('strong_pulse.wav',Sound.MAIN_BUNDLE, (error)=>{
    if(error){
      console.log('Error loading Sound: '+error);
      return;
    }
  });
  function playSound(){
    strong.play()
  }
  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      {/* <AudioPlayer/> */}
      <Button title="Play Sound" onPress={playSound} />
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
});
