import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MissingPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>404: Page Not Found!!!</Text>
    </View>
  )
}

export default MissingPage

const styles = StyleSheet.create({})