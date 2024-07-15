import React,{useCallback,useMemo, useState} from 'react'
import { View, Text, Button, TextInput,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}



export default function App() {
  const [key,setkey]=useState("")
const [value,setvalue]=useState("")

function SaveData(){
  save(key,value)
}
 
async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

  return (
    <SafeAreaView style={styles.container} >
  
  <Text  style={styles.paragraph}>Enter the key/value</Text>
<TextInput 
style={styles.textInput1}
value={key}
onChangeText={(text)=>{
     setkey(text)
     
}}
/>
<TextInput 
style={styles.textInput}
value={value}
onChangeText={(val)=>{
     
      setvalue(val)
}}
/>
   <Button title='save data' onPress={()=>{SaveData()
   }
    } ></Button>
    
    <Text style={styles.paragraph}>🔐 Enter your key 🔐</Text>
    <TextInput
        style={styles.textInput}
        onSubmitEditing={event => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder="Enter the key for the value you want to get"
      />
<Button title='get data' ></Button>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
  },
  textInput1: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
    backgroundColor:"green"
  },
})


