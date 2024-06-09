import {Pressable, Text} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'
import {atoms as a, tokens as t} from '@/alf'

type ButtonVariant = 'primary' | 'map'

type ButtonProps = {
  href?: string
  onPress?: () => void
  label: string
  variant?: ButtonVariant
}

const Button = ({onPress, label, href, variant = 'primary'}: ButtonProps) => {
  if (variant === 'map') {
  }

  if (href) {
    return (
      <Link
        style={[
          a.justify_center,
          a.align_center,
          {
            backgroundColor: t.color.yellow_500,
            shadowColor: t.color.red_300,
            shadowOffset: {
              width: 4,
              height: 4,
            },
          },
          a.py_md,
          a.px_4xl,
          a.rounded_sm,
        ]}
        href={href}
        role="link">
        <Text style={[a.text_xl, a.font_bold, {color: t.color.white_600}]}>
          {label}
        </Text>
      </Link>
    )
  }
  return (
    <Pressable
      style={[
        a.justify_center,
        a.align_center,
        {
          backgroundColor: t.color.yellow_500,
          shadowColor: t.color.red_300,
          shadowOffset: {
            width: 4,
            height: 4,
          },
        },
        a.py_md,
        a.px_4xl,
        a.rounded_sm,
      ]}
      onPress={onPress}
      accessibilityRole='button'
      role="button">
      <Text style={[a.text_xl, a.font_bold, {color: t.color.white_600}]}>
        {label}
      </Text>
    </Pressable>
  )
}

export default Button
