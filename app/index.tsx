import * as React from 'react'
import {Text, View} from 'react-native'
import Button from '@/components/Button'
import {atoms as a} from '@/alf/atoms'
import {color as t} from '@/alf/tokens'

export default function Index() {
  return (
    <View style={[a.flex_1, a.align_center]}>
      <Text style={[a.font_bold, a.text_5xl, {color: t.green_400}]}>
        Welcome to BCS-Mania
      </Text>
      <View style={[a.flex_1, a.align_center, a.justify_center, a.gap_xl]}>
        <Button label="Login" href="/login" />
        <Button label="Register" href="/register" />

        <Button label='Go to Home' href='/home' />


      </View>
    </View>
  )
}
