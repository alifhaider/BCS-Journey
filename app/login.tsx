import * as React from 'react'
import {Text, View} from 'react-native'
import Button from '@/components/Button'
import {atoms as a} from '@/alf/atoms'
import {color as t} from '@/alf/tokens'
import {Input} from '@/components/TextField'

export default function Login() {
  return (
    <View
      style={[
        a.border,
        a.rounded_md,
        a.px_2xl,
        a.py_4xl,
        a.gap_lg,
        a.shadow_md,

        a.w_full,
        {borderColor: t.white_600, maxWidth: 400},
      ]}>
      <Text style={[a.text_4xl, a.font_bold, {color: t.black_800}]}>
        Login to your account!
      </Text>
      <Input
        label="Email"
        placeholder="Enter email"
        accessibilityLabel="input"
        accessibilityHint="email"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        accessibilityLabel="input"
        accessibilityHint="password"
      />
      <Button label="Login" />
    </View>
  )
}
