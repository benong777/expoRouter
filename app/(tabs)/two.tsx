import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Two = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Tab Two</Text>
      <Button 
        onPress={() => router.back()}
        title='Go back'
      />
    </View>
  )
}

export default Two

const styles = StyleSheet.create({})