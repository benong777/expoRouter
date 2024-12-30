import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' 
        options={{
          title: 'Posts'
        }}
      />
      <Stack.Screen name='[id]' 
        options={{
          title: 'Posts Details'
          // headerTitle: 'Posts Details'   // works the same as 'title' above here
        }}
      />
    </Stack>
  )
}

export default _layout