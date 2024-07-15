import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Brightness from 'expo-brightness';





export default function App() {
  const brightnessPerrmission = async()=>{
  const [permissionResponse, requestPermission] = Brightness.usePermissions();
  // console.log(permissionResponse)
  if (permissionResponse.status !== 'granted') {
    await requestPermission();
    console.log('Brightness permission granted');
}
}

useEffect(()=>{
  brightnessPerrmission()
},[])


async function brightness(){
//  const bLevel= await Brightness.getBrightnessAsync();
//  console.log(bLevel)  
// const Blevel = await  Brightness.getSystemBrightnessAsync()
// console.log(Blevel)
const Blevel = await  Brightness.getSystemBrightnessModeAsync()
console.log(Blevel)
}
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text>App</Text>
      <Button title='Blevel' onPress={brightness}></Button>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})