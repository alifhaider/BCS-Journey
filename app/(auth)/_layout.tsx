import {View} from 'react-native'
import React from 'react'
import {Slot} from 'expo-router'

const AuthLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Slot />
    </View>
  )
}

export default AuthLayout
