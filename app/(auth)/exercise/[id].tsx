import * as React from 'react'
import {View, Text} from 'react-native'
import {atoms as a, tokens as t} from '@/alf'

export default function LevelPage() {
  return (
    <View
      style={[
        a.flex_1,
        a.justify_center,
        a.align_center,
        a.gap_2xl,
        {backgroundColor: t.color.purple_700},
      ]}>
      <Text>Level Page</Text>
    </View>
  )
}
