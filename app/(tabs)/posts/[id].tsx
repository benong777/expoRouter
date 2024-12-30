import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const PostDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen
        options={{
          headerTitle: 'Post Details ' + id
        }}
      />
      <Text style={{ fontSize: 24 }}>Post Details: {id} </Text>
    </View>
  )
}

export default PostDetails

const styles = StyleSheet.create({})