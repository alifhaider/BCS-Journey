import * as React from 'react'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import {Colors} from '@/constants/Colors'
import {View} from 'react-native'

export default function Login() {
  return (
    <View
      style={{
        borderColor: Colors.brand.OceanBreeze,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
        gap: 20,
        shadowColor: Colors.brand.OceanBreeze,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 3,
      }}>
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
