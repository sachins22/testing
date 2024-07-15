import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useId , useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function App4() {

    const id = useId()
    const [count,setcount] = useState(1)
    const [name, setname] = useState("aman")
    useEffect(()=>{
        console.log("useEffect")
    },[name])
    console.log(id)
    console.log("aman")

  return (
    <SafeAreaView style={{flex:1}} >
    <View style={{backgroundColor:"green" , height:100 , justifyContent:"center", alignItems:"center" }}>
      <Text style={{  color:"#fff"}}>{id}</Text>
      
    </View>
    <Button title='incresement' onPress={()=>setcount(count+1)}></Button>
    <Button title='decresment'onPress={()=>setcount(count-1)}></Button>
    <Button title='nameChange' onPress={()=>setname("sachin")}></Button>
    <Button title='nameChange' onPress={()=>setname("Aman")}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})