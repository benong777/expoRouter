import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      {/* Customize tab screen */}
      <Tabs.Screen
        name='one'
        options={{
          headerTitle: 'Tab One', // Tab header title
          tabBarLabel: 'One'      // Bottom menu tab label
        }}/>
      <Tabs.Screen
        name='two'
        options={{
          headerTitle: 'Tab Two',
          tabBarLabel: 'Two'     
        }}/>
      <Tabs.Screen
        name='posts'
        options={{
          // headerTitle: 'Posts Header',
          tabBarLabel: 'Posts',
          headerShown: false
        }}/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})