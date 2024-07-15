import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Cellular from 'expo-cellular';

export default function App() {
  const [status, requestPermission] = Cellular.usePermissions();
console.log(status)
async function cell(){

  if(status.status != "granted"){
    requestPermission();
  }

  const cellular = await Cellular.getMobileNetworkCodeAsync()
  console.log(cellular)
}
  return (
    <SafeAreaView>
    <View>
      <Text>App</Text>
<Button title='cellular' onPress={cell}></Button>   
    </View>
    </SafeAreaView>
  )
}