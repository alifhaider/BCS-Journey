import { Colors } from "@/constants/Colors";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, SplashScreen } from "expo-router";
import { useEffect } from "react";
import {  useColorScheme, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    'Roboto-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
    
  }, [error, fontsLoaded]);

  if (!fontsLoaded && !error) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: Colors.brand.PassionPlum }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1, backgroundColor: Colors.brand.PassionPlum }} >
          <Slot />
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
