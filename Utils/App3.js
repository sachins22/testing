import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState,useReducer} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function App3() {

  const [name,setname]=useState("")

  var initialStates = {
    name :"sachin",
    age:22
  }

  const reducer = (state , action)=>{
    console.log(state)
    console.log(action)
    switch(action.type){
      case "Changename":
        return {...state,name:action.name}
        case "InceaseAge":
          return {...state,age:state.age+1}
        case"decreaseage":
        return {...state,age:state.age-1}
    }
      


    return state;

  }


// const [ state , dispatch ] =useReducer(reducer , initarg)
const [ state , dispatch ] =useReducer(reducer , initialStates)

  return (
    <>
    <SafeAreaView style={{flex:1}}>
    <View style={{ display:"flex" , gap:30}}>
      <Text>AAM JINDGI : {name}</Text>
      <Text>mENTOS JINDGI : {state.name}</Text>
      <Text>mENTOS Age : {state.age}</Text>
<TextInput style={{width:"97%",height:50,backgroundColor:"gray"}} value={name}
onChangeText={(e)=>setname(e)}/>




      <Button title='ChangeName' onPress={()=>dispatch({type :"Changename" , name :name})}></Button>
      <Button title='InceaseAge' onPress={()=>dispatch({type :"InceaseAge"})}></Button>
      <Button title='decreaseage' onPress={()=>dispatch({type :"decreaseage"})}></Button>
    </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({})