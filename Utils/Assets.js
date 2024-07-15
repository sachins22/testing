import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Asset, useAssets } from 'expo-asset';





export default function App() {
var asset = useAssets([require("./assets/back.png")])
console.log(asset)

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})