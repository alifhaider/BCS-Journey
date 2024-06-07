import {Pressable, Text} from 'react-native'
import React from 'react'
import {styles} from '@/styles'
import { Link } from 'expo-router'

type ButtonProps = {
  href?: string
  onPress?: () => void
  title: string
}

const Button = ({ onPress, title, href }: ButtonProps) => {
  if (href) {
    return (
      <Link
        style={styles.primaryButton}
        href={href}
        accessibilityRole="link">
        <Text>{title}</Text>
      </Link>
    )
  }
  return (
    <Pressable
      style={styles.primaryButton}
      onPress={onPress}
      accessibilityRole="button">
      <Text>{title}</Text>
    </Pressable>
  )
}

export default Button
