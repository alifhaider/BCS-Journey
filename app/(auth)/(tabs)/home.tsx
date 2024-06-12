import {View} from 'react-native'
import React from 'react'
import {atoms as a, tokens as t} from '@/alf'
import Button from '@/components/Button'

const Home = () => {
  const steps = [1, 2, 3, 4, 5]

  return (
    <View
      style={[
        a.flex_1,
        a.justify_center,
        a.align_center,
        a.gap_2xl,
        {backgroundColor: t.color.purple_700},
      ]}>
      {steps.map(s => (
        <Button
          label={String(s)}
          key={s}
          href={`/exercise/eng?level=${s}`}
          variant="map"
        />
      ))}
    </View>
  )
}

export default Home
