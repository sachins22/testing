import React, { useEffect, useState } from 'react'
import { Audio, Video } from 'expo-av';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
    const [recording, setRecording] = useState(undefined);
    const [sound, setSound] = useState();


    const [permissionResponse, requestPermission] = Audio.usePermissions();


    
    async function startRecording (){

        if(permissionResponse.status !== "granted"){

            await requestPermission()
        }
        // console.log(permissionResponse)

        // setting options how audio will play in IOS 
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          });

          console.log("starting recording");

          var audioRecord = await Audio.Recording.createAsync();
          console.log("Audio Record",audioRecord) 
          setRecording(audioRecord.recording)
    }


    async function stopRecording() {
        console.log('Stopping recording..');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync(
          {
            allowsRecordingIOS: false,
          }
        );
        const uri = recording.getURI();
        console.log('Recording stopped and stored at', uri);
        console.log("before Sound")
        var ss = await Audio.Sound.createAsync(uri)
        console.log("sound", ss,ss.sound)
        setSound(ss.sound);

        // console.log('Playing Sound');
        // await sound.playAsync();
      }


    
    async  function PlayRecording(recording){
        
            // const sound1= recording.getURI()
        // console.log('Loading Sound');
        // var audiofile = recording.getURI()
        // const { sound } = await Audio.Sound.createAsync(audiofile)

        // setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
  
      }

    useEffect(() => {
    //   getAudioPermission();
    }, [])

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
   
    
  return (
    <SafeAreaView style={{flex:1}}>

    <View style={{ flex:1,  gap : 20, display:"flex", justifyContent : "center" , alignItems:"center" }}>

      <Button title='start Recording' onPress={startRecording}></Button>
      <Button title='Stop Recording' onPress={stopRecording} style={{ }}></Button>
      <Button title='Play Recording' onPress={PlayRecording} style={{ }}></Button>
    </View>
    </SafeAreaView>
  )
}
