import * as React from 'react'
import TextInput from '@/components/TextField'
import { View} from 'react-native'
import Button from '@/components/Button'
import { atoms as a } from '@/alf/atoms'
import {color as t} from '@/alf/tokens'

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
        {borderColor: t.blue_300}
      ]
      }>
      <TextInput
        placeholder="Enter email"
        accessibilityLabel="input"
        accessibilityHint="email"
      />
      <TextInput
        placeholder="Enter password"
        accessibilityLabel="input"
        accessibilityHint="password"
      />
      <Button title="Login" />


    </View>
  )
}
