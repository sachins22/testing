import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useBatteryLevel ,useBatteryState, useLowPowerMode, usePowerState } from 'expo-battery';

import * as Battery from 'expo-battery';





export default function App() {

  // const batteryLevel = useBatteryLevel();
  // const batteryState = useBatteryState();
  // const lowPowerMode = useLowPowerMode();

  const { lowPowerMode, batteryLevel, batteryState } = usePowerState();

  (async()=>{
  //  var isLowPowerMode = await Battery.isLowPowerModeEnabledAsync()
  //  var CurrentBatteryState = await Battery.getBatteryStateAsync()
  //  console.log([isLowPowerMode , CurrentBatteryState])
  var batteryStatus = await Battery.getPowerStateAsync()
  console.log(batteryStatus)
  })()
// console.log()


  return (
    <SafeAreaView>
    <View>
      <Text>App</Text>
      <Text>batteryLevel : {Math.round( batteryLevel * 100)}</Text>
      <Text>batteryState : {batteryState}</Text>
      <Text>lowPowerMode : {lowPowerMode}</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})