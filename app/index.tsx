import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <StatusBar style='light' /> */}
      <Text>Home Page</Text>
      <Link href='/register' asChild>
        <Button 
          title='Open register page' />
      </Link>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})