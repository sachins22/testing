import { Button, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function App() {
  const cameraRef = useRef();
  const [face ,setface]=useState("back")
const [Permission , requestPermission] = useCameraPermissions()
const [image, setImage] = useState(null)

if(!Permission){
  return <View/>
}

if(image){
return(
  <>
  <SafeAreaView>

  <View style={{justifyContent : 'center' , alignItems:"center" , gap : 20}}>
    <Text>Image</Text>
    <Image source={{uri : image.uri}} height={300} width={300} />
    <TouchableOpacity style={{ marginTop :10, padding:10, backgroundColor:"lightgreen"  }} onPress={()=>setImage(null)}>
      <Text style={{textAlign:"center" }}>Retake</Text>
    </TouchableOpacity>
  </View>
  </SafeAreaView>
  </>
)
}
if (!Permission.granted) {
  // Camera permissions are not granted yet.
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
      <Button onPress={requestPermission} title="grant permission" />
    </View>
  );
}

function RotateCamera(){
  setface((current)=>current==='back'?'front':'back')

}

var takePicture = async() => {
  var imgdata= await cameraRef.current.takePictureAsync()
  console.log(imgdata)
  setImage(imgdata)
}



     return (
    <SafeAreaView style={styles.container}> 
    <CameraView ref={cameraRef} style={styles.camera} 
    facing={face}
    // barcodeScannerSettings={{
    //   barcodeTypes: ['qr'],
    // }}
    // onBarcodeScanned={(e)=>console.log(e)}
    // zoom={0}
    // flash='on'
    // mode={true}
    // BarcodeSize
    >
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={RotateCamera} >
    <Feather name="rotate-cw" size={24} color="white" />
    </TouchableOpacity>

    <TouchableOpacity style={styles.button} onPress={takePicture} >
    {/* <Feather name="rotate-cw" size={24} color="white" /> */}
    <AntDesign name="camerao" size={24} color="white" />
    </TouchableOpacity>
    </View>
    </CameraView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  box:{
    width:70,
    height:70,
    backgroundColor:'transparent',
    borderRadius:30,
    borderColor:'#fff',
    borderWidth:1,
top:"215%"
  }
})


const ImageViewer = ({imageData}) => {
  console.log("ImageViewer" , imageData)
  return (
    <>
    <Text> Image Viewer</Text>
    </>
  )
}