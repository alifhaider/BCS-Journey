import * as React from 'react';
import { Slot, Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      <Slot />
    </Stack>
  );
}