import * as React from 'react'
import {useFonts} from 'expo-font'
import {Slot, SplashScreen} from 'expo-router'
import {useEffect} from 'react'
import {ScrollView} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import {atoms as a, tokens as t} from '@/alf'

SplashScreen.preventAutoHideAsync()

export default function AppRootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Roboto-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [error, fontsLoaded])

  if (!fontsLoaded && !error) return null
  return (
    <GestureHandlerRootView
      style={[a.flex_1, {backgroundColor: t.color.purple_700}]}>
      <SafeAreaView style={[a.h_full]}>
        <ScrollView contentContainerStyle={[a.h_full]}>
          <Slot />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}
