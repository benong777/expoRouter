import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

const _layout = () => {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          // backgroundColor: 'black',
        },
        // headerTintColor: 'white',
      }}
    >
      {/* Add page headers and customize it's look */}
      <Stack.Screen name='index'
        options={{
          title: 'Home'
        }}
      />
      <Stack.Screen name='(tabs)'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='login'
        options={{
          title: 'Login Modal',
          presentation: 'modal'
        }}
      />
      <Stack.Screen name='register/index'
        options={{
          title: 'Register',
          headerRight: ()=>(
            <Button onPress={() => router.push('/login') }
              title='Login'
            />
          )
        }}
      />
      <Stack.Screen name='[missing]'
        options={{
          title: '404 Error'
        }}
      />
    </Stack>
  )
}

export default _layout