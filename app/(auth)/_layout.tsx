import {View} from 'react-native'
import React from 'react'
import {Slot} from 'expo-router'
import {atoms as a} from '@/alf/atoms'

const AuthLayout = () => {
  return (
    <View style={[a.px_2xl, a.flex_1, a.justify_center, a.align_center]}>
      <Slot />
    </View>
  )
}

export default AuthLayout
