import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Posts = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Posts</Text>
      <Link href='/posts/1' style={{ fontSize: 24 }}>Open post 1 </Link>
      <Link href='/posts/2' style={{ fontSize: 24 }}>Open post 2 </Link>
      <Link href='/posts/3' style={{ fontSize: 24 }}>Open post 3 </Link>
    </View>
  )
}

export default Posts

const styles = StyleSheet.create({})