import * as React from 'react'
import {Colors} from '@/constants/Colors'
import {useFonts} from 'expo-font'
import {Slot, SplashScreen} from 'expo-router'
import {useEffect} from 'react'
import {ScrollView} from 'react-native'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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
      style={{flex: 1, backgroundColor: Colors.brand.PassionPlum}}>
        <SafeAreaView
          style={{height: '100%', backgroundColor: Colors.brand.PassionPlum}}>
          <ScrollView contentContainerStyle={{height: '100%'}}>
            <Slot />
          </ScrollView>
        </SafeAreaView>
    </GestureHandlerRootView>
  )
}
