import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function App() {

  const storeData = async (sachin) => {
    
     const st= await AsyncStorage.setItem('my-key', sachin);
  
     console.log(st)
  };

  const getData = async () => {
       const value = await AsyncStorage.getItem('my-key');
console.log(value)

  };
  return (
    <SafeAreaView>
        <View>
      <Text>App</Text>
      <Button title='setDAta' onPress={storeData}/>
      <Button title='GetDAta' onPress={getData}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})