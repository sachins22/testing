import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {CHATS, SingleChatCard} from "./chat/Chat"




export default function App2() {

 const scrollref = useRef()
 const inputref = useRef()

 const scrolltotop = () => {
  scrollref.current.scrollTo({x: 0, y: 0, animated: true})
 }

 const scrollToEnd = () => {
  scrollref.current.scrollToEnd({animated: true})
 }

 const showscrollindicators = () => {
  scrollref.current.flashScrollIndicators()
 }

 const focusininput = () => {
  inputref.current.focus()
 }
 const removefocus = () => {
  inputref.current.blur()
 }
 const cleartext = () => {
  inputref.current.clear()
 }

  return(
    <>
    <SafeAreaView>
    <View >

      <Button title='focus' onPress={focusininput}></Button>
      <Button title='remove focus' onPress={removefocus}></Button>
      <Button title='remove text' onPress={cleartext}></Button>
{/* <Button title='scroll to top' onPress={scrolltotop}></Button>
<Button title='scroll to end' onPress={scrollToEnd}></Button>
<Button title='show indicators' onPress={showscrollindicators}></Button> */}

<TextInput style={{ margin:5 , borderColor:"pink" , borderWidth:2}} ref={inputref}  />
</View>
   <ScrollView ref={scrollref} StickyHeaderComponent={<WhatFront/>}
   decelerationRate={"fast"}
   >
    { CHATS.map((chat)=>{
      return(
        <View>
          <SingleChatCard data={chat} />
        </View>
      )
    }) }
   </ScrollView>
   
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})