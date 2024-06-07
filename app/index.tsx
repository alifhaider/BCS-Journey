import * as React from 'react'
import {styles} from '@/styles'
import {Text, View} from 'react-native'
import Button from '@/components/Button'

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
        
        <Button title="Login" href="/login" />
        <Button title="Register" href="/register" />
      </View>
    </View>
  )
}
