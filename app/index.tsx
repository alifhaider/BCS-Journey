import * as React from 'react'
import Button from '@/components/Button'
import {styles} from '@/styles'
import {Text, View} from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Text style={styles.headerLarge}>Welcome to BCS-Mania</Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
        <Button href="/login" title="Login" />
        <Button href="/register" title="Register" />
      </View>
    </View>
  )
}
