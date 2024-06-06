import {Text} from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {styles} from '@/styles'
import {Link} from 'expo-router'

type ButtonProps = {
  href?: string
  onPress?: () => void
  title: string
}

const Button = ({href, onPress, title}: ButtonProps) => {
  return (
    <>
      {href ? (
        <Link href={href} style={styles.primaryButton}>
          <Text>{title}</Text>
        </Link>
      ) : (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
          <Text>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  )
}

export default Button
