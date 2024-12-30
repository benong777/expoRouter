import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const One = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Tab One</Text>
      <Button 
        onPress={() => router.back()}
        title='Go back'
      />
    </View>
  )
}

export default One

const styles = StyleSheet.create({})