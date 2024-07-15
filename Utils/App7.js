import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useMemo,memo} from 'react'

export default function App() {
  console.log("Main Component")
  const [count,setCount] = React.useState(0)
  return (
    <SafeAreaView style={{marginTop:50}}>
    <View>
      <Text>Main Component</Text>
     <Child1 v={count} />
    <Child2  />
    <Button title='change component' onPress={()=>setCount(count+1)}></Button>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})


const Child1 =memo( ({v}) => {
  console.log("Child1")
  return(
    <View>
      <Text>Child1</Text>
    </View>
  )
  
}
)

const Child2 =memo( () => {
  console.log("Child2")
  return(
    <View>
      <Text>Child2</Text>
    </View>
  )
})