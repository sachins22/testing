import { StyleSheet, Text, View, Button, Image, FlatList } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default function App() {
  const [images, setImages] = React.useState([]);
  const [CPstatus, requestCPPermission] = ImagePicker.useCameraPermissions();
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const Detail = async () => {
    const formData = new FormData();
    images.forEach((image, index) => {
      formData.append(`image`, {
        uri: image.uri,
        type: image.type,
        name: image.fileName
        // name: image.uri.split('/').pop(), // Extracting the file name from the URI
      });
    });

    // try {
    //  var test = await axios.post(`http://192.168.1.4:2200/api/upload`, formData);
    //  console.log(test)
    // } catch (error) {
    //   console.error(error);
    // }

  await fetch("http://192.168.1.4:2200/api/upload",{
    method: "POST",
    body: formData,
  }).then((response)=>{
    response.json((resp)=>{
      console.log(resp)
    })
  }).catch((err)=>{
    console.log(err)
  })



  };

  // .then(()=>{
  //   console.log(response)
  //   console.log("success")
  // })
  // .catch(error,()=>{
  //   console.log(error)
  // })

  const cameraPermission = async () => {
    if (CPstatus.status !== "granted") {
      const permission = await requestCPPermission();
      if (!permission.granted) return;
    }

    let capImg = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setImages(capImg.assets)
   
  };

  const imgPicker = async () => {
    if (status.status !== "granted") {
      const permission = await requestPermission();
      if (!permission.granted) return;
    }

    const IMP = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    setImages(IMP.assets)
 
  };

  const cnImg = () => {
    console.log(images);
  };

  return (
    <SafeAreaView>
      <View style={{ gap: 20 }}>
        <Button title="camera" onPress={cameraPermission}></Button>
        <Button title="image picker" onPress={imgPicker}></Button>
        {/* <Button title="console img" onPress={cnImg}></Button> */}
        <View style={styles.imageContainer}>
          <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item.uri }} style={styles.image}></Image>
            )}
          />
        </View>
        <Button title="AddDetail" onPress={Detail} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
